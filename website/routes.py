from flask import Blueprint, render_template, request, flash, jsonify
from flask_login import login_required, current_user
from .models import Note, User
from . import db
import json

# creates a blueprint object of all the routes on the website
routes = Blueprint('routes', __name__)
#current_points = db.session

# ('/') defines the root route after the url
@routes.route('/', methods=['GET', "POST"])
@login_required
def home():
    if current_user.user_state == 'new':
        new_note = Note(data="Walk, bike, or take the bus somewhere instead of driving", user_id=current_user.id, points=3)
        db.session.add(new_note)
        new_note = Note(data="Make sure all recyclables for the day go in the recycling", user_id=current_user.id, points=2)
        db.session.add(new_note)
        new_note = Note(data="Pick up litter", user_id=current_user.id, points=1)
        db.session.add(new_note)
        new_note = Note(data="Make sure all lights and energy-using devices (within reason) are off before you go to sleep", user_id=current_user.id, points=1)
        db.session.add(new_note)
        db.session.commit()
        current_user.user_state = 'old'
        db.session.commit()
    
    if request.method == 'POST':
        note = request.form.get('note')
        points = request.form.get('points')
        print(points)
        
        if len(note) < 1:
            flash('Note is too short.', 'error')
        else:
            new_note = Note(data=note, user_id=current_user.id, points=points)
            db.session.add(new_note)
            db.session.commit()
            flash('Note added.', 'success')
            
    return render_template("home.html", user=current_user)


@routes.route('/delete-notes', methods=['POST'])
def delete_notes():
    print("delete_notes called")
    # takes json data form the request.data (note to be deleted)
    note = json.loads(request.data)
    noteId = note['noteId']  # noteId is the id of the note to be deleted
    note = Note.query.get(noteId)  # check if note exists
    
    # if note exisits and made by the user who created the note, delete it
    if note:
        if note.user_id == current_user.id:
            db.session.delete(note)
            db.session.commit()
            flash('Note deleted.', 'success')
    
    return jsonify({})  # return empty json object

@routes.route('/add-points', methods=['POST'])
def add_points():
    print("add_points called")
    # takes json data form the request.data (note to be deleted)
    note = json.loads(request.data)
    noteId = note['noteId']  # noteId is the id of the note to be deleted
    note = Note.query.get(noteId)  # check if note exists
    
    # if note exisits and made by the user who created the note, delete it
    user = User.query.get(note.user_id)
    if note:
        if not note.complete and note.user_id == user.id:
            user.total_points += note.points
            note.complete = True
            db.session.commit()
            flash('Points added.', 'success')
        elif note.complete and note.user_id == user.id:
            user.total_points -= note.points
            note.complete = False
            db.session.commit()
            flash('Points removed.', 'success')
            
    return render_template("home.html", user=current_user)
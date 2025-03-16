from django.shortcuts import render
from django import forms
from django.http import HttpResponseRedirect
from django.urls import reverse

# NewTaskForms is a class for adding new forms from django, it takes forms.Form as a parameter.
class NewTaskForms(forms.Form):

    #it seems to be when you want an input for some text, you can use forms.charfield
    task = forms.CharField(label="New Task")
    
    #and for an integer field with constraints you can use IntergerField but is a bit different from the other form
    priority = forms.IntegerField(label="Priority", min_value=1, max_value=5)

# Create your views here.
tasks = []

# functions always take a request, the if condition checks if the tasks are not in session and if they aren't they add
# a new empty list otherwise render the existing list.
def index(request):
    if "tasks" not in request.session:
        request.session["tasks"] = []
    return render(request, "tasks/index.html", {
        "tasks": request.session["tasks"]
    }) 
#to recieve input from the user, use post, use the class (in this case NewTaskForm) and check if it's valid,
#uses the cleaned data function and then updates the new task to either the new or existing task list on to a table.
def add(request):
    if request.method == "POST":
        checkform = NewTaskForms(request.POST)
        if checkform.is_valid():
            newtask = checkform.cleaned_data["task"]
            request.session["tasks"] += [newtask]
        #todo is the app name so always use the app name when using reverse function. 
        #this redirects the user to the index after every submit
            return HttpResponseRedirect(reverse("todo:index"))
        else:
            return render(request, "tasks/add.html", {
                "form": checkform
            })
    return render(request, "tasks/add.html", {
        #using the class as a form to display for the client
        "form": NewTaskForms
    })
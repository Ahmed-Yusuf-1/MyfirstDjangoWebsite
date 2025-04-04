from django.shortcuts import render, redirect
# Removed unused import
from django.http import HttpResponseRedirect
from django import forms

class Newform(forms.Form):
    the_task = forms.CharField(label="New task")
    priority = forms.IntegerField(label="Priority", min_value=1, max_value=5)

# Create your views here.
def index(request):
    if "practice" not in request.session:
        request.session["practice"] = []
    return render(request, "practice/index.html", {
        "practice": request.session["practice"]
    })
def add(request):
    if request.method == "POST":
        form = Newform(request.POST)

        if form.is_valid():
            task = form.cleaned_data["the_task"]
            request.session["practice"] += [task]
            return redirect("practice:index")
        else:
            return render(request, "practice/add.html", {
                "form": form
            })
    else:
        return render(request, "practice/add.html", {
            "form": Newform()
        })
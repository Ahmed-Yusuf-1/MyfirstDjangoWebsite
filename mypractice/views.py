from django.shortcuts import render
from django import forms

class NewForm(forms.Form):
    task = forms.CharField(label="New task")

# Create your views here.
def index(request):
    if request.method == "POST":
        form = NewForm(request.POST)
        if form.is_valid:
            task = form.cleaned_data["task"]
    else:
        form = NewForm()
        return render(request, "practice/index.html", {
            "form": form
        })
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, "afnan/index.html")

def greet(request, name):
    return render(request, "afnan/greet.html", {
        "name": name.capitalize()
    })
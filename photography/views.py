from django.shortcuts import render
from django.http import HttpResponseRedirect

def home(request):
    return render(request, "photography/index.html")

def portfolio(request):
    return render(request, "photography/portfolio.html")

def quote(request):
    return render(request, "photography/quote.html")
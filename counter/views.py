from django.shortcuts import render

# Create your views here.
def index(request):
    if "counter" not in request.session:
        count = 0
    if "counter" in request.session:
        count = request.session["counter"] + 1
    else:
        count = 1
    request.session["counter"] = count
    return render(request, "counter/index.html", {"count": count})
    
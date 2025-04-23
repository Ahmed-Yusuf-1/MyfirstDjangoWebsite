from django.urls import path
from . import views

app_name = 'photography'
urlpatterns = [
    path("", views.home, name="home"),
    path("portfolio", views.portfolio, name="portfolio"),
    path("quote", views.quote, name="quote"),
]

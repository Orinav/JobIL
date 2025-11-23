from django.contrib import admin # → Imports the admin panel system that Django gives you for free.
from django.urls import path, include # → path = create one URL rule, → include = “send the request to another urls.py file”

urlpatterns = [
    path('admin/', admin.site.urls), # → http://localhost:8000/admin/, → When someone visits /admin/ → show the beautiful admin panel (we’ll log in later).
    path('', include('jobs.urls')),   # → include all URLs from jobs app, → When someone visits ANY URL that we didn’t catch above → look inside jobs/urls.py
]
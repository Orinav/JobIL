from django.db import models

class Job(models.Model): # → creates a real database table called jobs_job
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    salary = models.CharField(max_length=50, blank=True) # blank=True → field can be empty in forms
    type = models.CharField(max_length=50, blank=True)  # Full-time, Part-time, etc.
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True) # auto_now_add=True → automatically sets the date when job is created
    updated_at = models.DateTimeField(auto_now=True) # auto_now=True → updates every time the job is saved

    def __str__(self):
        return f"{self.title} at {self.company}"
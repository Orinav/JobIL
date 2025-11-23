from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobViewSet

# Create router and register our viewset with a prefix
router = DefaultRouter()
router.register(r'jobs', JobViewSet, basename='job')   # ← changed from '' to 'jobs'

urlpatterns = [
    path('api/', include(router.urls)),  # ← now everything is under /api/
]
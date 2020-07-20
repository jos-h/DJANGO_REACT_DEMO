from django.urls import path, include
from rest_framework import routers
from .views import UserCreation

router = routers.DefaultRouter()
router.register("users", UserCreation, basename='users')

urlpatterns = [
    path('api/', include(router.urls)),
]

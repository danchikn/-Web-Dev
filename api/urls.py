from django.urls import path
from . import views
from .views import CompanyList,CompanyDetail,ComVacanList,VacancyList,VacancyDetail,VacancyTopTen

urlpatterns = [
    path('companies/', CompanyList.as_view()),
    path('company/<int:id>/', CompanyDetail.as_view()),
    path('vacancies/', VacancyList.as_view()),
    path('vacancy/<int:id>/', VacancyDetail.as_view()),
    path('company/<int:id>/vacancies/',ComVacanList.as_view()),
    path('vacancies/ten_top/', VacancyTopTen.as_view()),
    path('companies/delete/<int:id>/', views.companyDelete, name="companiesDelete"),
    path('vacancies/delete/<int:id>/', views.vacancyDelete, name="vacaciesDelete"),
]
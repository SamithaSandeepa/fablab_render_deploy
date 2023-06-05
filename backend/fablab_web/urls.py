from django.urls import include, path, re_path
from django.views.generic import TemplateView
from book.views import BookList, BookCreate
from projectMakandura.views import projectMakanduraList, projectMakanduraCreate, projectMakanduraDelete, projectMakanduraUpdate, projectMakanduraDetail
from news.views import NewsList, NewsDetail, NewsCreate, NewsUpdate, NewsDelete
from event.views import EventList, EventDetail, EventCreate, EventUpdate, EventDelete
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('books/', BookList.as_view(), name='book_list'),
    path('books/create/', BookCreate.as_view(), name='book_create'),

    #project makandura API 
    path('projectmakandura/', projectMakanduraList.as_view(), name='projectmakandura_list'),
    path('projectmakandura/<int:pk>/', projectMakanduraDetail.as_view(), name='projectmakandura_detail'),
    path('projectmakandura/create/', projectMakanduraCreate.as_view(), name='projectmakandura_create'),
    path('projectmakandura/<int:pk>/update/', projectMakanduraUpdate.as_view(), name='projectmakandura_update'),
    path('projectmakandura/<int:pk>/delete/', projectMakanduraDelete.as_view(), name='projectmakandura_delete'),
    # vcff

    #news API
    path('news/', NewsList.as_view(), name='news_list'),
    path('news/<int:pk>/', NewsDetail.as_view(), name='news_detail'),
    path('news/create/', NewsCreate.as_view(), name='news_create'),
    path('news/<int:pk>/update/', NewsUpdate.as_view(), name='news_update'),
    path('news/<int:pk>/delete/', NewsDelete.as_view(), name='news_delete'),

    #event API
    path('event/', EventList.as_view(), name='event_list'),
    path('event/<int:pk>/', EventDetail.as_view(), name='event_detail'),
    path('event/create/', EventCreate.as_view(), name='event_create'),
    path('event/<int:pk>/update/', EventUpdate.as_view(), name='event_update'),
    path('event/<int:pk>/delete/', EventDelete.as_view(), name='event_delete')

]


urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
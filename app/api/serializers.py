# api/serializers.py
from rest_framework import serializers

class BookSearchParamsSerializer(serializers.Serializer):
    author = serializers.CharField(max_length=255, required=False, allow_blank=True)
    title = serializers.CharField(max_length=255, required=False, allow_blank=True)
    person = serializers.CharField(max_length=255, required=False, allow_blank=True)
    keywords = serializers.CharField(max_length=255, required=False, allow_blank=True)
    keywords_cvalif = serializers.CharField(max_length=255, required=False, allow_blank=True)
    subject_rubric = serializers.CharField(max_length=255, required=False, allow_blank=True)
    year1 = serializers.CharField(max_length=4, required=False, allow_blank=True)
    year2 = serializers.CharField(max_length=4, required=False, allow_blank=True)
    publishing = serializers.CharField(max_length=255, required=False, allow_blank=True)
    isbn = serializers.CharField(max_length=13, required=False, allow_blank=True)
    document_type = serializers.CharField(max_length=255, required=False, allow_blank=True)
    document_form = serializers.CharField(max_length=255, required=False, allow_blank=True)
    document_language = serializers.CharField(max_length=255, required=False, allow_blank=True)

class ExaSearchSerializer(serializers.Serializer):
    query = serializers.CharField(required=True)
    num_result = serializers.IntegerField(required=False)
    max_characters = serializers.IntegerField(required=False)

class NewsFetcherParamsSerializer(serializers.Serializer):
    news_count = serializers.IntegerField(required=False)
class ExaResultSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=255)
    url = serializers.URLField()
    content = serializers.CharField()
    
class GoogleLLMSerializer(serializers.Serializer):
    user_message = serializers.CharField(max_length=300 ,required=True)
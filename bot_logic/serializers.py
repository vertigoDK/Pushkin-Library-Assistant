from rest_framework import serializers

class LegendSerializer(serializers.Serializer):
    legend_name = serializers.CharField(max_length=255, required=True)

class TextQuerySerualizer(serializers.Serializer):
    text_query = serializers.CharField(max_length=300, required=True)

class BookSearchSerializer(serializers.Serializer):
    author = serializers.CharField(max_length=255, required=False)
    person = serializers.CharField(max_length=255, required=False)
    title = serializers.CharField(max_length=255, required=False)
    keywords = serializers.CharField(max_length=255, required=False)
    keywords_cvalif = serializers.CharField(max_length=255, required=False)
    subject_rubric = serializers.CharField(max_length=255, required=False)
    year1 = serializers.CharField(max_length=4, required=False)
    year2 = serializers.CharField(max_length=4, required=False)
    publishing = serializers.CharField(max_length=255, required=False)
    isbn = serializers.CharField(max_length=13, required=False)
    document_type = serializers.CharField(max_length=50, required=False)
    document_form = serializers.CharField(max_length=50, required=False)
    document_language = serializers.CharField(max_length=50, required=False)
    
class SearchQuerySerializer(serializers.Serializer):
    search_word = serializers.CharField(max_length=255)
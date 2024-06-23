from rest_framework import serializers

class SearchQuerySerializer(serializers.Serializer):
    query = serializers.CharField(max_length=200)
    threshold = serializers.FloatField(default=0.8)

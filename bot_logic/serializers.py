from rest_framework import serializers

class LegendSerializer(serializers.Serializer):
    legend_name = serializers.CharField(max_length=255, required=True)
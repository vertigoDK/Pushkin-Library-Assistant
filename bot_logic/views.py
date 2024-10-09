from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import LegendSerializer
from .services.engines.legends_engine import LegendsEngine


@api_view(['POST'])
def legends_engine_view(request):
    serializer = LegendSerializer(data=request.data)
    if serializer.is_valid():

        LEngine: LegendsEngine = LegendsEngine()

        legend_name = serializer.validated_data['legend_name']

        result = LEngine.search_legends(query_text=legend_name)

        return Response({"legends": result}, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
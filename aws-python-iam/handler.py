import json
import boto3
import os


def hello(event, context):
   client = boto3.client("lambda")
   response = client.list_functions()
   print("-----------------------")
   print(os.environ["FIRST_NAME"])
   print("-----------------------")
   return response

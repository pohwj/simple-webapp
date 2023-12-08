import json
import boto3
import time
from botocore.exceptions import ClientError

# Initialize the DynamoDB client
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('childtasks')  # Assuming your table is named 'childtasks'

def lambda_handler(event, context):
    
    # Parse the body from string to Python dictionary
    body = json.loads(event['body'])
    
    # Extract data from the event object at frontend Javascript
    child_name = body['childName']
    work_description = body['workDescription']
    
    # Generate a timestamp for the sort key
    timestamp = int(time.time())  # This will give you a Unix timestamp

    # Store the data in DynamoDB
    try:
        response = table.put_item(
            Item={
                'childname': child_name,       # Using lowercase for the attribute name
                'timestamp': timestamp,        # Using lowercase for the attribute name
                'workDescription': work_description
            }
        )
        return {
            'statusCode': 200,
            'body': json.dumps('Work entry added successfully!')
        }
    except ClientError as e:
        print(e.response['Error']['Message'])
        return {
            'statusCode': 500,
            'body': json.dumps('An error occurred while adding the work entry.')
        }

# **Simple web application to select and store child's housework**

The project consists of a simple web application and deployed on AWS using services such as S3, AWS Lambda, Cloudfront and DynamoDB.

# **Features**

Parents enter their child's name on the webpage and select the housework he or she has done. The data will be captured in DynamoDB.

# **Configuration**

S3 Bucket: Objects in bucket are not made public

Dynamo DB table : A combination of Partition key (String) and Sort Key (Number) are used for childname and timestamp since multiple entries for the same child can be made.

AWS Lambda: Function URL is used and set CORS to accept request from origin of Cloudfront URL
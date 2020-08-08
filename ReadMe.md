Step 1 :
serverless config credentials --provider aws --key <programaticKey> --secret <programaticSecret> --profile <IAM User> [document recommend's name serverless-admin]

Step 2:
sls create --template aws-node --path hello-world

Step 3:
update serverless.yml file 
add ```profile: serverless-admin region: ap-southeast-2``` in provider section
update function code.

Step 4:
sls deploy -v

This create and display below message
```Service Information
service: hello-world
stage: dev
region: ap-southeast-2
stack: hello-world-dev
resources: 6
api keys:
  None
endpoints:
  None
functions:
  hello: hello-world-dev-hello
layers:
  None```

Step 5:
sls invoke -f hello -l <hello is function name>

Step 6:
sls deploy function -f hello [This will not create cloudformation stack like `sls deploy -v`]

Step 7:
sls logs -f hello -t [tails logs]

Step 8:
sls remove [clean up]

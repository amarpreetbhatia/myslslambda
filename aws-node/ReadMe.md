## timeout and memory settings
We can set `memorySize: 256, timeout: 6` these properties at function level
or provider level(can override at function level as well) for memory and timeout
in serverless.yml file

```
exports.handler = async (event) => {
    console.log(JSON.stringify(event));
    const bodyContent = {
        "name":"amarpreet",
        "age": 30,
        "cities": [
            "Mumbai",
            "Sydney"
            ]
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify(bodyContent),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return response;
};

```

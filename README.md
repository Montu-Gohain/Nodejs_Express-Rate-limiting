# What is Rate limiting ?

Rate limiting is a technique used by backend APIs to restrict the number of requests a user or a client can make within a given time period. The goal of rate limiting is to prevent a single user or client from overwhelming the API with too many requests, which can cause performance degradation or even downtime for the API.

A rate limiter typically works by tracking the number of requests made by a user or client, and imposing a limit on the number of requests that can be made within a certain time window, such as a minute or an hour. If the user or client exceeds the limit, the API will respond with an error or a status code indicating that the request has been throttled or rate-limited.

Rate limiting can help improve the reliability and availability of a backend API by preventing abuse or excessive use of its resources. It can also help prevent malicious attacks such as Distributed Denial of Service (DDoS) attacks, which can overload an API with a flood of requests from multiple sources.

# How to implement it in a node js Express api ?

Simple we'll need some npm packages :

```js
npm i express express-rate-limit
```

Create a REST endpoint and apply this rate-limit package as a middleware

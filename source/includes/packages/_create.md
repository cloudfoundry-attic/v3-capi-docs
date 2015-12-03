## Create a Package

```
Definition
```

```http
POST /v3/apps/:guid/packages HTTP/1.1
```

```
Example Request
```

```shell
curl "https://api.[your-domain.com]/v3/apps/[guid]]/packages" \
  -X POST \
 	-H "Authorization: bearer [token]" \
 	-H "Host: [host.com]" \
 	-H "Content-Type: application/x-www-form-urlencoded" \
 	-H "Cookie: " \
  -d '{ \
    "type": "docker", \
      "data": { \
        "image": "registry/image:latest", \
        "credentials": { \
        "user": "user name", \
        "password": "very secret password", \
        "email": "root@admin.example.com", \
        "login_server": "https://index.docker.io/v1" \
        }, \
        "store_image": true \
      } \
    }'
```

```
Example Response
```

```http
HTTP/1.1 201 Created
Content-Type: application/json;charset=utf-8
X-VCAP-Request-ID: 7237bae0-228e-48be-a074-b6c15491e73f
Content-Length: 695
X-Content-Type-Options: nosniff

{
  "guid": "4cb65058-f04f-458f-aca1-5f4e43de6407",
  "type": "docker",
  "data": {
    "hash": {
      "type": "sha1",
      "value": null
    },
    "error": null,
    "image": "registry/image:latest",
    "credentials": {
      "user": "user name",
      "email": "root@admin.example.com",
      "password": "very secret password",
      "login_server": "https://index.docker.io/v1"
    },
    "store_image": true
  },
  "state": "READY",
  "created_at": "2015-11-03T00:53:54Z",
  "updated_at": null,
  "links":
  {
    "self": {
      "href": "/v3/packages/4cb65058-f04f-458f-aca1-5f4e43de6407"
    },
    "app": {
      "href": "/v3/apps/d8b8148d-5798-44de-821a-64b85b15e968"
    }
  }
}
```

This endpoint creates a new package.

### Query Parameters

Name | Description | Default | Valid Values | Example Values
--------- | ------- | ----------- | --------------| -------------
type | Package type | | <ul><li>bits</li><li>docker</li></ul> | bits
data | Data for docker packages. Can be empty for bits packages. | |
data_image | Location of docker image. Required for docker packages. | |
data_credentials | Credentials for private docker image, available fields are user, password, email, login server. | |
data_store_image | Whether or not the backend should cache the image. Defaults to false. | |

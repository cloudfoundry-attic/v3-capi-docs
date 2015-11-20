## Stage a Package

```
Definition
```

```http
POST /v3/packages/:guid/droplets HTTP/1.1
```

```
Command
```

```shell
curl "https://api.[your-domain.com]/v3/packages/[guid]/droplets" \
  -d '[json_body]' \
  -X POST \
 	-H "Authorization: bearer [token]" \
 	-H "Host: [host.com]" \
 	-H "Content-Type: application/x-www-form-urlencoded" \
 	-H "Cookie: "
```

```
Example Request
```

```http
POST /v3/packages/aee22e31-6476-435e-a8c9-8961c6ead83e/droplets HTTP/1.1
Authorization: bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidWFhLWlkLTg1IiwiZW1haWwiOiJlbWFpbC04M0Bzb21lZG9tYWluLmNvbSIsInNjb3BlIjpbImNsb3VkX2NvbnRyb2xsZXIucmVhZCIsImNsb3VkX2NvbnRyb2xsZXIud3JpdGUiXSwiYXVkIjpbImNsb3VkX2NvbnRyb2xsZXIiXSwiZXhwIjoxNDQ3MTE2ODM0fQ.tjNdnWSk17am8-UmEWNJigpQ6jE6aOVzk5Ze5fW4ZI4
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{
  "environment_variables":
  {
    "CUSTOM_ENV_VAR": "hello"
  },
  "lifecycle":
  {
    "type": "buildpack",
    "data":
    {
      "buildpack": "http://github.com/myorg/awesome-buildpack",
      "stack": "cflinuxfs2"
    }
  }
}
```

```
Example Response
```

```http
HTTP/1.1 201 Created
Content-Type: application/json;charset=utf-8
X-VCAP-Request-ID: whatuuid
Content-Length: 1575
X-Content-Type-Options: nosniff

{
  "guid": "whatuuid",
  "state": "PENDING",
  "error": null,
  "lifecycle":
  {
    "type": "buildpack",
    "data":
    {
      "buildpack": "http://github.com/myorg/awesome-buildpack",
      "stack": "cflinuxfs2"
    }
  },
  "memory_limit": 1024,
  "disk_limit": 4096,
  "result":
  {
    "buildpack": null,
    "stack": "cflinuxfs2",
    "process_types": null,
    "hash":
    {
      "type": "sha1",
      "value": null
    },
    "execution_metadata": null
  },
  "environment_variables":
  {
    "CUSTOM_ENV_VAR": "hello",
    "VCAP_APPLICATION":
    {
      "limits":
      {
        "mem": 1024,
        "disk": 4096,
        "fds": 16384
      },
      "application_id": "f82a88a2-2197-45b2-8b6d-84d1be8e2d0e",
      "application_version": "whatuuid",
      "application_name": "name-673",
      "application_uris":
      [

      ],
      "version": "whatuuid",
      "name": "name-673",
      "space_name": "name-670",
      "space_id": "8543c9f2-0ec4-4bd2-adb4-eee7b2cd6c9d",
      "uris":
      [

      ],
      "users": null
    },
    "CF_STACK": "cflinuxfs2",
    "MEMORY_LIMIT": 1024,
    "VCAP_SERVICES":
    {

    }
  },
  "created_at": "2015-11-03T00:53:54Z",
  "updated_at": null,
  "links":
  {
    "self":
    {
      "href": "/v3/droplets/whatuuid"
    },
    "package":
    {
      "href": "/v3/packages/aee22e31-6476-435e-a8c9-8961c6ead83e"
    },
    "app":
    {
      "href": "/v3/apps/f82a88a2-2197-45b2-8b6d-84d1be8e2d0e"
    },
    "assign_current_droplet":
    {
      "href": "/v3/apps/f82a88a2-2197-45b2-8b6d-84d1be8e2d0e/current_droplet",
      "method": "PUT"
    }
  }
}
```

This endpoint stages a package. Staging a package creates a droplet.

### Query Parameters

Name | Description | Default | Valid Values | Example Values
--------- | ------- | ----------- | -------------- | ------------
environment_variables | Environment variables to use during staging. Environment variable names may not start with "VCAP_" or "CF_". "PORT" is not a valid environment variable. | | <ul><li>object</li></ul> | <ul><li>{"FEATURE_ENABLED": "true"}
memory_limit | Memory limit used to stage package | | <ul><li>integer</li></ul> |
disk_limit | Disk limit used to stage package | | <ul><li>integer</li></ul> |
lifecycle | Lifecycle information for a droplet. If not provided, it will default to a buildpack. |  <ul><li>object</li></ul> | <ul><li>{ "type": "buildpack", "data": { "buildpack": "http://github.com/myorg/awesome-buildpack", "stack": "cflinuxfs2" } }</li></ul> |

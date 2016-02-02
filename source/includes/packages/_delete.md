## Delete a Package

```
Definition
```

```http
DELETE /v3/packages/:guid HTTP/1.1
```

```
Example Request
```

```shell
$ curl "https://api.[your-domain.com]/v3/packages/[guid]" \
  -X DELETE \
  -H "Authorization: bearer [token]"
```

```
Example Response
```

```http
HTTP/1.1 204 No Content
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Runtime: 0.014007
```

This endpoint deletes a specific package.

### Body Parameters

<p class='no-body-parameters-outer'>
  <span class='no-body-parameters-required'>
    No arguments
  </span>
</p>

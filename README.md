# Securo Portal RestApi
## Routes for User
### to register a new user
- user/register : post
```
{
    name:
    email:
    password:
}
```

### to login an existing user
- user/login :post
```
{
    email:
    password:
}
```

### to view the profile of an authenticated user
- user/profile :post

## Routes for steps
### to add a new step
- step/add :post
```
{
    stepTitle:
}
```

### to get all steps
- step/get-all :get

### to get a single step
- step/get-single
```
{
    stepId:
}
```
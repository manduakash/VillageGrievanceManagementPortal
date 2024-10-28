<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Login Page | Gramin Sikayat Niwaran Portal </title>

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&amp;display=fallback"
    />

    <link
      rel="stylesheet"
      href="../AdminLTE/plugins/fontawesome-free/css/all.min.css"
    />

    <link
      rel="stylesheet"
      href="../AdminLTE/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
    />

    <link rel="stylesheet" href="../css/signup.css"/>

    <link rel="stylesheet" href="../AdminLTE/dist/css/adminlte.min.latest.css" />

    <link rel="stylesheet" href="../AdminLTE/plugins/sweetalert2/sweetalert2.min.css" />
    <link rel="stylesheet" href="../css/complaint_page.css" />
 
  </head>
  <body class="register-page" style="min-height: 539.333px">
    <a href="/" role="button" class="btn btn-outline-primary home-btn"><i class="fa fa-arrow-left"></i> Go back</a>
    <div class="register-box">
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <a href="../AdminLTE/index2.html" class="h1"><b>Admin</b> <b class="text-primary">Login</b></a>
        </div>
        <div class="card-body">
          <p class="login-box-msg text-bold"><span class="text-theme-primary-dark">Login</span> as administrator</p>
          <form action="{{route('admin.login.post')}}" method="post">
            @csrf

            {{-- success alert --}}
            @if(session()->has('success'))
              <div class="alert alert-default-success w-100 d-block mb-3"><i class="fas fa-check-circle"></i>  {{session()->get('success')}}</div>
            @endif
            {{-- failure alert --}}
            @if(session()->has('error'))
              <div class="alert alert-default-danger w-100 d-block mb-3"><i class="fas fa-exclamation-circle"></i> {{session()->get('error')}}</div>
            @endif

             {{-- phone number --}}
             <div class="input-group @if($errors->has('username')) mb-0 @else mb-3 @endif">
              <input type="text" name="username" class="form-control @if($errors->has('username')) is-invalid @endif" placeholder="Phone Number" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-phone"></span>
                </div>
              </div>
            </div>
            @if($errors->has('username'))
              <span class="text-danger d-block mb-3">{{$errors->first('username')}}</span>
            @endif
            
            {{-- password --}}
            <div class="input-group @if($errors->has('password')) mb-0 @else mb-3 @endif">
              <input
                type="password"
                name="password"
                class="form-control @if($errors->has('password')) is-invalid @endif"
                placeholder="Password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            @if($errors->has('password'))
              <span class="text-danger d-block mb-3">{{$errors->first('password')}}</span>
            @endif

            <div class="row">
              <div class="col-8">
                <div class="icheck-success">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="terms"
                    value="agree"
                  />
                  <label for="agreeTerms">
                    Remember me
                  </label>
                </div>
              </div>

              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                  Login
                </button>
              </div>
            </div>
          </form>
          <a href="reset-password" class="w-100 d-block"
            >Forgot password?</a>
          <a href="sign-up" class="w-100 d-block"
            >Register a new account</a
          >
        </div>
      </div>
    </div>

    <script src="../AdminLTE/plugins/jquery/jquery.min.js"></script>

    <script src="../AdminLTE/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

    <script src="../AdminLTE/dist/js/adminlte.min.js"></script>
  </body>
</html>

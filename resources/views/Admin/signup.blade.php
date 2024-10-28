<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Registration Page | Gramin Sikayat Niwaran Portal </title>

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
          <a href="../AdminLTE/index2.html" class="h1"><b>Admin</b><b class="text-primary">Register</b></a>
        </div>
        <div class="card-body">
          <form action="{{route('admin.signup.post')}}" method="post">
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
            {{-- village --}}
            <div class="input-group d-none">
              <input type="text" name="village" value="N/A" class="form-control @if($errors->has('village')) is-invalid @endif" placeholder="Village" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fa fa-map"></span>
                </div>
              </div>
            </div>

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

          <!-- auth_type_id -->
          <div class="form-group @if($errors->has('auth_type_id')) mb-0 @else mb-3 @endif">
            <select id="auth_type_dropdown" name="auth_type_id" class="form-control @if($errors->has('auth_type_id')) is-invalid @endif">
                <option selected value="">Select Admin Type</option>
                <option title="Village Level" value="2">Sarpanch(Gram Pradhan)/Secretary</option>
                <option title="Block Level" value="3">BDO</option>
                <option title="District Level" value="4">DM/CDO</option>
                <option title="State Level" value="5">Chief Secretary/DGP</option>
            </select>
          </div>
          @if($errors->has('auth_type_id'))
            <span class="text-danger d-block mb-3">{{$errors->first('auth_type_id')}}</span>
          @endif

          <!-- state_id -->
          <div class="form-group mb-3 d-none @if($errors->has('state_id')) mb-0 @else mb-3 @endif">
            <select id="state_dropdown" name="state_id" class="form-control @if($errors->has('state_id')) is-invalid @endif">
                <option selected value="0">Select State</option>
            </select>
          </div>
          @if($errors->has('state_id'))
            <span class="text-danger d-block mb-3">{{$errors->first('state_id')}}</span>
          @endif
          
          <!-- district_id -->
          <div class="form-group mb-3 d-none @if($errors->has('district_id')) mb-0 @else mb-3 @endif">
              <select id="district_dropdown" name="district_id" class="form-control @if($errors->has('district_id')) is-invalid @endif">
                  <option selected value="0">Select District</option>
              </select>
          </div>
          @if($errors->has('district_id'))
            <span class="text-danger d-block mb-3">{{$errors->first('district_id')}}</span>
          @endif
          <!-- block_id -->
          <div class="form-group mb-3 d-none @if($errors->has('block_id')) mb-0 @else mb-3 @endif">
            <select id="block_dropdown" name="block_id" class="form-control @if($errors->has('block_id')) is-invalid @endif">
                <option selected value="0">Select Block</option>
            </select>
          </div>
          @if($errors->has('block_id'))
            <span class="text-danger d-block mb-3">{{$errors->first('block_id')}}</span>
          @endif
          <!-- gp_id -->
          <div class="form-group mb-3 d-none @if($errors->has('gp_id')) mb-0 @else mb-3 @endif">
            <select id="gp_dropdown" name="gp_id" class="form-control @if($errors->has('gp_id')) is-invalid @endif">
                <option selected value="0">Select Gram Panchayat</option>
            </select>
          </div>
          @if($errors->has('gp_id'))
            <span class="text-danger d-block mb-3">{{$errors->first('gp_id')}}</span>
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
                    I agree to the <a href="#" class="text-primary">terms</a>
                  </label>
                </div>
              </div>

              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                  Register
                </button>
              </div>
            </div>
          </form>
          <a href="login" class="text-center mx-auto mt-4"
            >Already Registered?</a
          >
        </div>
      </div>
    </div>

    <script src="../AdminLTE/plugins/jquery/jquery.min.js"></script>

    <script src="../AdminLTE/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

    <script src="../AdminLTE/dist/js/adminlte.min.js"></script>
    <script src="../js/admin/signup.js"></script>
  </body>
</html>
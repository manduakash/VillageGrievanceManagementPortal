<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Dashboard Page | Admin</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
    <link rel="stylesheet" href="../AdminLTE/plugins/fontawesome-free/css/all.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="../AdminLTE/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
    <link rel="stylesheet" href="../css/user_dashboard.css" />
    <link rel="stylesheet" href="../AdminLTE/dist/css/adminlte.min.latest.css" />
    <link rel="stylesheet" href="../AdminLTE/plugins/sweetalert2/sweetalert2.min.css" />
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&amp;display=fallback"
  />

  <link
    rel="stylesheet"
    href="../AdminLTE/plugins/fontawesome-free/css/all.min.css"
  />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <link
    rel="stylesheet"
    href="../AdminLTE/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
  />

  <link rel="stylesheet" href="../css/user_dashboard.css" />
  <link
    rel="stylesheet"
    href="../AdminLTE/dist/css/adminlte.min.latest.css"
  />
  <link rel="stylesheet" href="../AdminLTE/plugins/sweetalert2/sweetalert2.min.css" />
  
  </head>
  <body class="sidebar-mini" style="height: auto">
    <div class="wrapper">
      <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
          </li>
          <li class="nav-item d-sm-inline-block">
            <a href="/" class="nav-link">Home</a>
          </li>
          <li class="nav-item d-sm-inline-block">
            <a href="{{ URL::previous() }}" class="nav-link">Go Back</a>
          </li>
          <li class="nav-item d-sm-inline-block">
            <a href="logout" class="nav-link text-danger">Logout</a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" data-widget="navbar-search" href="#" role="button">
              <i class="fas fa-search"></i>
            </a>
            <div class="navbar-search-block">
              <form class="form-inline">
                <div class="input-group input-group-sm">
                  <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                  <div class="input-group-append">
                    <button class="btn btn-navbar" type="submit">
                      <i class="fas fa-search"></i>
                    </button>
                    <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
              <i class="far fa-comments"></i>
              <span class="badge badge-danger navbar-badge">3</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" class="dropdown-item">
                <div class="media">
                  <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle" />
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      Brad Diesel
                      <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">Call me whenever you can...</p>
                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <div class="media">
                  <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      John Pierce
                      <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">I got your message bro</p>
                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <div class="media">
                  <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      Nora Silvester
                      <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">The subject goes here</p>
                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
              <i class="far fa-bell"></i>
              <span class="badge badge-warning navbar-badge">15</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span class="dropdown-header">15 Notifications</span>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <i class="fas fa-envelope mr-2"></i> 4 new messages
                <span class="float-right text-muted text-sm">3 mins</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <i class="fas fa-users mr-2"></i> 8 friend requests
                <span class="float-right text-muted text-sm">12 hours</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <i class="fas fa-file mr-2"></i> 3 new reports
                <span class="float-right text-muted text-sm">2 days</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-widget="fullscreen" href="#" role="button">
              <i class="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
              <i class="fas fa-th-large"></i>
            </a>
          </li>
        </ul>
      </nav>

      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <div class="sidebar">
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image p-1">
              <img src="https://img.icons8.com/?size=58&id=KICzEAXp0VMR&format=png" class="img-circle elevation-2 p-1 bg-light" alt="User Image" />
            </div>
            <div class="info">
              <a href="#" class="d-block">Admin</a>
            </div>
          </div>

          <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li class="nav-item menu-is-opening menu-open">
                <a href="#" class="nav-link active">
                  <p>
                    Complaint Type
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview" style="display: block">
                  <li class="nav-item">
                    <a href="education_complaint" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Education</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="health-complaint" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Health</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="development-complaint" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Development</p>
                    </a>
                  </li>
                </ul>
              </li>
              
            </ul>
           
          </nav>
        </div>
      </aside>

      <div class="content-wrapper" style="min-height: 217.667px">
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0">Complaint Details:</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item active">Complaint Details</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div class="content">
          <div class="container-fluid">
            {{-- success alert --}}
            @if(session()->has('success'))
              <div class="alert alert-default-success w-100 d-block mb-3 alert-dismissible fade show pr-2" role="alert">
                <strong><i class="fas fa-check-circle"></i> Success!</strong> {{session()->get('success')}}
                <button type="button" class="btn btn-transparent float-right py-0" data-dismiss="alert" aria-label="Close"><i class="fas fa-times"></i></button>
              </div>
            @endif
            {{-- failure alert --}}
            @if(session()->has('error'))
              <div class="alert alert-default-danger w-100 d-block mb-3 alert-dismissible fade show pr-2" role="alert">
                <strong><i class="fas fa-exclamation-circle"></i> Failure!</strong> {{session()->get('error')}}
                <button type="button" class="btn btn-transparent float-right py-0" data-dismiss="alert" aria-label="Close"><i class="fas fa-times"></i></button>
              </div>
            @endif
            <div class="row w-100 px-2">
              @if($complaint->complaint_status_id == 0)
                <div class="callout callout-success"><strong class="text-muted">Complaint Status:</strong> <i class="fa fa-check-circle text-primary ml-3 mr-1"></i>Resolved</div>
              @elseif($complaint->complaint_status_id == 1)
                <div class="callout callout-warning"><strong class="text-muted">Complaint Status:</strong> <i class="fa fa-clock text-warning ml-3 mr-1"></i>Pending at Village Authority Level</div>
              @elseif($complaint->complaint_status_id == 2)
                <div class="callout callout-warning"><strong class="text-muted">Complaint Status:</strong> <i class="fa fa-clock text-warning ml-3 mr-1"></i>Pending at Block Authority Level</div>
              @elseif($complaint->complaint_status_id == 3)
                <div class="callout callout-warning"><strong class="text-muted">Complaint Status:</strong> <i class="fa fa-clock text-warning ml-3 mr-1"></i>Pending at District Authority Level</div>
              @elseif($complaint->complaint_status_id == 4)
                <div class="callout callout-warning"><strong class="text-muted">Complaint Status:</strong> <i class="fa fa-clock text-warning ml-3 mr-1"></i>Pending at State Authority Level</div>
              @endif
            </div>
            <div class="row w-100">
                {{-- Complaint Type --}}
                <div class="col-md-3 form-group">
                    <label class="mb-0 text-muted">Complaint Type</label>
                    <label class="form-control form-control-border">
                        @if ($complaint->complaint_type_id == 1)
                            Education Related
                        @elseif ($complaint->complaint_type_id == 2)
                            Health Related
                        @elseif ($complaint->complaint_type_id == 3)
                            Development Related
                        @else
                            -
                        @endif
                    </label>
                </div>

                {{-- Complainant Name --}}
                <div class="col-md-3 form-group">
                    <label class="mb-0 text-muted">Complainant Name</label>
                    <label class="form-control form-control-border">
                        @if ($complaint->anonymous_flag == 1)
                            Not available
                        @else
                            {{$complaint->complainant_name}}
                        @endif
                    </label>
                </div>

                {{-- Contact Number --}}
                <div class="col-md-3 form-group">
                    <label class="mb-0 text-muted">Contact Number</label>
                    <label class="form-control form-control-border">
                        @if ($complaint->anonymous_flag == 1)
                            Not available
                        @else
                            {{$complaint->user->username}}
                        @endif
                    </label>
                </div>

                {{-- Obtained Support --}}
                <div class="col-md-3 form-group">
                    <label class="mb-0 text-muted">Obtained Support</label>
                    <label class="form-control form-control-border">
                        {{$complaint->likes_count}} person(s)
                    </label>
                </div>

                {{-- Complaint Date --}}
                <div class="col-md-3 form-group">
                    <label class="mb-0 text-muted">Complaint Date</label>
                    <label class="form-control form-control-border">
                        {{ $complaint->created_at->format('d-m-Y')}}
                    </label>
                </div>
                    
                {{-- State --}}
                <div class="col-md-3 form-group">
                    <label class="mb-0 text-muted">State</label>
                    <label class="form-control form-control-border">
                        {{ $complaint->state->state_name}}
                    </label>
                </div>
                
                {{-- District --}}
                <div class="col-md-3 form-group">
                    <label class="mb-0 text-muted">District</label>
                    <label class="form-control form-control-border">
                        {{ $complaint->district->district_name}}
                    </label>
                </div>

                {{-- Block --}}
                <div class="col-md-3 form-group">
                    <label class="mb-0 text-muted">Block</label>
                    <label class="form-control form-control-border">
                        {{ $complaint->block->block_name}}
                    </label>
                </div>
                
                {{-- Gram Panchayat --}}
                <div class="col-md-6 form-group">
                    <label class="mb-0 text-muted">Gram Panchayat</label>
                    <label class="form-control form-control-border">
                        {{$complaint->gram_panchayat->gp_name}}
                    </label>
                </div>

                 {{-- Village --}}
                 <div class="col-md-6 form-group d-flex flex-column h-auto">
                    <label class="mb-0 text-muted">Village</label>
                    <label class="form-control form-control-border h-auto">
                        {{ $complaint->village}}
                    </label>
                </div>
            </div>
            <div class="row w-100 d-flex align-items-start">
                {{-- Complaint Description --}}
                <div class="col-md-12 form-group d-flex flex-column h-auto">
                    <label class="mb-0 text-muted">Complaint Description</label>
                    <label class="form-control form-control-border h-auto">
                      {{ $complaint->complaint_desc}}
                    </label>
                </div>
            </div>
            <div class="row w-100">
                {{-- Complaint Image --}}
                <div class="col-md-12 form-group d-block">
                    <label class="mb-0 text-muted w-100 d-block">Complaint Image</label>
                    <object data="{{ url('/storage/UploadedDocs/'.$complaint->complaint_image_url)}}" width="100%" height="auto"></object>
                </div>
            </div>
            <hr>
            <form id="complaint-disposal-form" action="{{route('admin.dispose.complaint.post')}}" method="post" class="row w-100 pb-4 
            @if(session('auth_type_id') == 2 && $complaint->complaint_status_id != 1) d-none 
            @elseif(session('auth_type_id') == 3 && $complaint->complaint_status_id != 2) d-none 
            @elseif(session('auth_type_id') == 4 && $complaint->complaint_status_id != 3) d-none 
            @elseif(session('auth_type_id') == 5 && $complaint->complaint_status_id != 4) d-none 
            @endif
            ">
              <h3 class="px-2">Dispose Complaint:</h3>
              @csrf
              <div class="col-md-12 py-3">
                <input type="hidden" name="id" value="{{$complaint->id}}">
                <input type="hidden" id="disposal_type" name="disposal_type" value="resolve">
                <!-- remarks -->
                <div class="form-group mb-0">
                    <label for="remarks">Remarks<span
                            class="text-danger">*</span></label>
                    <textarea name="remarks" id="remarks" class="form-control form-control-sm @if($errors->has('remarks')) is-invalid @endif" rows="4"
                        placeholder="Write some remarks regards this Complaint"></textarea>
                </div>
                <span class="text-danger @if($errors->has('remarks')) d-block @else invisible d-block @endif">{{$errors->first('remarks')}}!</span>
              </div>
              <div class="row w-100 d-flex justify-content-center">
                <button id="resolve" class="btn btn-primary mx-1 rounded-pill">Resolve the Complaint</button>
                <button id="forward" class="btn btn-outline-primary mx-1 rounded-pill">
                  @if(session('auth_type_id')==2) <!-- village level auth login -->
                    Forward to Block Level Authority
                  @elseif(session('auth_type_id')==3) <!-- block level auth login -->
                    Forward to District Level Authority
                  @elseif(session('auth_type_id')==4) <!-- district level auth login -->
                    Forward to State Level Authority
                  @else
                    -
                  @endif
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- jQuery -->
    <script src="../AdminLTE/plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="../AdminLTE/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- AdminLTE App -->
    <script src="../AdminLTE/dist/js/adminlte.js"></script>
    <script src="../AdminLTE/plugins/sweetalert2/sweetalert2.min.js"></script>
    <script
    src="../AdminLTE/plugins/bootstrap/js/bootstrap.bundle.min.js"
  ></script>
  <script src="../AdminLTE/dist/js/adminlte.min.js"></script>
  <script src="../AdminLTE/plugins/sweetalert2/sweetalert2.min.js"></script>
  <script src="../js/admin/complaint_details.js"></script>
  </body>
</html>

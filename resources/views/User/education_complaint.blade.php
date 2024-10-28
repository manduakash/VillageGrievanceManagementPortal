<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Complaint Page | Gramin Sikayat Niwaran Portal</title>

    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&amp;display=fallback" />

    <link rel="stylesheet" href="../AdminLTE/plugins/fontawesome-free/css/all.min.css" />

    <link rel="stylesheet" href="../AdminLTE/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />

    <link rel="stylesheet" href="../AdminLTE/dist/css/adminlte.min.latest.css" />

    <link rel="stylesheet" href="../AdminLTE/plugins/sweetalert2/sweetalert2.min.css" />
    <link rel="stylesheet" href="../css/complaint_page.css" />

    <!-- javascript -->
</head>

<body class="sidebar-mini" style="height: auto">
    <div class="wrapper">
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i
                            class="fas fa-bars"></i></a>
                </li>
                <li class="nav-item d-sm-inline-block">
                    <a href="/" class="nav-link">Home</a>
                </li>
                <li class="nav-item d-sm-inline-block">
                    <a href="user-dashboard" class="nav-link">Dashboard</a>
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
                                <input class="form-control form-control-border form-control form-control-border-navbar"
                                    type="search" placeholder="Search" aria-label="Search" />
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
                                <img src="dist/img/user1-128x128.jpg" alt="User Avatar"
                                    class="img-size-50 mr-3 img-circle" />
                                <div class="media-body">
                                    <h3 class="dropdown-item-title">
                                        Brad Diesel
                                        <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                                    </h3>
                                    <p class="text-sm">Call me whenever you can...</p>
                                    <p class="text-sm text-muted">
                                        <i class="far fa-clock mr-1"></i> 4 Hours Ago
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <div class="media">
                                <img src="dist/img/user8-128x128.jpg" alt="User Avatar"
                                    class="img-size-50 img-circle mr-3" />
                                <div class="media-body">
                                    <h3 class="dropdown-item-title">
                                        John Pierce
                                        <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                                    </h3>
                                    <p class="text-sm">I got your message bro</p>
                                    <p class="text-sm text-muted">
                                        <i class="far fa-clock mr-1"></i> 4 Hours Ago
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <div class="media">
                                <img src="dist/img/user3-128x128.jpg" alt="User Avatar"
                                    class="img-size-50 img-circle mr-3" />
                                <div class="media-body">
                                    <h3 class="dropdown-item-title">
                                        Nora Silvester
                                        <span class="float-right text-sm text-warning"><i
                                                class="fas fa-star"></i></span>
                                    </h3>
                                    <p class="text-sm">The subject goes here</p>
                                    <p class="text-sm text-muted">
                                        <i class="far fa-clock mr-1"></i> 4 Hours Ago
                                    </p>
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
                    <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#"
                        role="button">
                        <i class="fas fa-th-large"></i>
                    </a>
                </li>
            </ul>
        </nav>

        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <div class="sidebar">
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image p-1">
                        <img src="{{ asset('storage/UploadedDocs/'.session('profile_pic')) }}"
                            class="img-circle elevation-2 p-1 bg-white" alt="User Image" />
                    </div>
                    <div class="info">
                        <a href="#" class="d-block">{{session('name')}}</a>
                        
                    </div>
                </div>

                <nav class="mt-2">
                    <ul
                      class="nav nav-pills nav-sidebar flex-column"
                      data-widget="treeview"
                      role="menu"
                      data-accordion="false"
                    >
                      <li class="nav-item">
                        <a href="/" class="nav-link">
                        <i class="nav-icon fas fa-home"></i>
                        <p>Home</p>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-window-restore"></i>
                        <p>Dashboard</p>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="user-profile" class="nav-link">
                        <i class="nav-icon fas fa-user"></i>
                        <p>Profile</p>
                        </a>
                      </li>
                      <li class="nav-item menu-is-opening menu-open">
                        <a href="#" class="nav-link">
                          <i class="nav-icon fa fa-th-list"></i>
                          <p>
                            Category
                            <i class="right fas fa-angle-left"></i>
                          </p>
                        </a>
                        <ul class="nav nav-treeview" style="display: block">
                          <li class="nav-item">
                            <a href="education-complaint" class="nav-link active bg-primary">
                              <i class="fas fa-circle nav-icon text-secondary-dark"></i>
                              <p>Education Complaint</p>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="health-complaint" class="nav-link">
                              <i class="far fa-circle nav-icon"></i>
                              <p>Health Complaint</p>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="development-complaint" class="nav-link">
                              <i class="far fa-circle nav-icon"></i>
                              <p>Development Complaint</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a href="complaints?state=4&district=0&block=0&gp=0" class="nav-link">
                        <i class="nav-icon fas fa-file"></i>
                        <p>Compliants Feed</p>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="logout" class="nav-link">
                        <i class="nav-icon fa fa-arrow-right"></i>
                        <p>Logout</p>
                        </a>
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
                            <h1 class="m-0">Raise Education Related Complaint</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item active">Education Complaint</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <section class="content">
                <form method="post" action="{{route('complaint.post')}}">
                    @csrf

                    {{-- success alert --}}
                    @if(session()->has('success'))
                        <div class="alert alert-default-success w-100 d-block mb-3"><i class="fas fa-check-circle"></i>  {{session()->get('success')}}</div>
                    @endif
                    {{-- failure alert --}}
                    @if(session()->has('error'))
                        <div class="alert alert-default-danger w-100 d-block mb-3"><i class="fas fa-exclamation-circle"></i> {{session()->get('error')}}</div>
                    @endif

                    <div class="row">
                        <div class="col-md-9 mx-auto">
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Complaint Details</h3>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <!-- complainant_name -->
                                            <div class="form-group mb-0">
                                                <label for="complainant_name">Your Name </label>
                                                <div class="input-group">
                                                    <input type="text" id="complainant_name" name="complainant_name" readonly title="if you want to edit this change it from your profile" value="{{session('name')}}"
                                                        class="form-control form-control-border @if($errors->has('complainant_name')) is-invalid @endif"
                                                        placeholder="Enter your name here (optional)" 
                                                    />
                                                    <div class="input-group-prepend" title="Click if you dont want to show your name in this complaint!">
                                                        <span class="input-group-text">
                                                            <input type="checkbox" name="anonymous_flag" id="anonymous_flag"/> <label for="anonymous_flag" class="mx-1 my-0 py-0 text-bold fs-small">hide</label>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="text-danger @if($errors->has('complainant_name')) d-block @else invisible d-block @endif">{{$errors->first('complainant_name')}}!</span>
                                            
                                            <!-- state_id -->
                                            <div class="form-group mb-0">
                                                <label for="state_dropdown">State<span class="text-danger">*</span></label>
                                                <select id="state_dropdown" name="state_id" data-state-id="{{session('state_id')}}" readonly title="if you want to edit this change it from your profile" class="form-control form-control-border @if($errors->has('state_id')) is-invalid @endif">
                                                    <option hidden="">Select one</option>
                                                </select>
                                            </div>
                                            <span class="text-danger @if($errors->has('state_id')) d-block @else invisible d-block @endif">{{$errors->first('state_id')}}!</span>
                                            
                                            <!-- district_id -->
                                            <div class="form-group mb-0">
                                                <label for="district_dropdown">District<span
                                                        class="text-danger">*</span></label>
                                                <select id="district_dropdown" name="district_id" data-district-id="{{session('district_id')}}" readonly title="if you want to edit this change it from your profile" class="form-control form-control-border @if($errors->has('district_id')) is-invalid @endif">
                                                    <option selected="" hidden="">Select one</option>
                                                </select>
                                            </div>
                                            <span class="text-danger @if($errors->has('district_id')) d-block @else invisible d-block @endif">{{$errors->first('district_id')}}!</span>

                                        </div>
                                        <div class="col-md-6">
                                            <!-- village -->
                                            <div class="form-group mb-0">
                                                <label for="village">Village Name<span
                                                        class="text-danger">*</span></label>
                                                <input type="text" id="village" name="village" value="{{session('village')}}" readonly title="if you want to edit this change it from your profile"
                                                    class="form-control form-control-border @if($errors->has('village')) is-invalid @endif"
                                                    placeholder="Enter your village name here" />
                                            </div>
                                            <span class="text-danger @if($errors->has('village')) d-block @else invisible d-block @endif">{{$errors->first('village')}}!</span>
                                            
                                            <!-- block_id -->
                                            <div class="form-group mb-0">
                                                <label for="block_dropdown">Block<span class="text-danger">*</span></label>
                                                <select id="block_dropdown" name="block_id" data-block-id="{{session('block_id')}}" readonly title="if you want to edit this change it from your profile" class="form-control form-control-border @if($errors->has('block_id')) is-invalid @endif">
                                                    <option selected="" hidden="">Select District First</option>
                                                </select>
                                            </div>
                                            <span class="text-danger @if($errors->has('block_id')) d-block @else invisible d-block @endif">{{$errors->first('block_id')}}!</span>

                                            <!-- gp_id -->
                                            <div class="form-group mb-0">
                                                <label for="gp_dropdown">Gram Panchayat<span class="text-danger">*</span></label>
                                                <select id="gp_dropdown" name="gp_id" data-gp-id="{{session('gp_id')}}" readonly title="if you want to edit this change it from your profile" class="form-control form-control-border @if($errors->has('gp_id')) is-invalid @endif">
                                                    <option selected="" hidden="">Select Block First</option>
                                                </select>
                                            </div>
                                            <span class="text-danger @if($errors->has('gp_id')) d-block @else invisible d-block @endif">{{$errors->first('gp_id')}}!</span>
                                        </div>
                                        <div class="col-md-12">
                                            <!-- complaint_desc -->
                                            <div class="form-group mb-0">
                                                <label for="complaint_desc">Your Complaint<span
                                                        class="text-danger">*</span></label>
                                                <textarea name="complaint_desc" id="complaint_desc" class="form-control form-control-sm @if($errors->has('complaint_desc')) is-invalid @endif" rows="4"
                                                    placeholder="Write Description of your Complaint"></textarea>
                                            </div>
                                            <span class="text-danger @if($errors->has('complaint_desc')) d-block @else invisible d-block @endif">{{$errors->first('complaint_desc')}}!</span>
                                        </div>

                                        <!-- complaint_image_url -->
                                        <div class="col-md-12 mb-0">
                                            <label for="ComplaintImage">Any Proof of Complaint</label>
                                            <div class="input-group input-group-sm">
                                                <input type="file" class="form-control ComplaintImage @if($errors->has('complaint_image_url')) is-invalid @endif"
                                                 id="ComplaintImage" value="" data-file-size="2000" data-file-type="image">
                                                <span class="input-group-append">
                                                    <button type="button"
                                                        class="btn btn-primary btn-flat upload-btn"><i
                                                            class="fa fa-upload mx-3 p-2 bg-primary rounded-circle"></i></button>
                                                    <button type="button"
                                                        class="btn btn-danger btn-flat delete-btn d-none"><i
                                                            class="fa fa-trash mx-3 p-2 bg-danger rounded-circle"></i></button>
                                                </span>
                                            </div>
                                            <span class="text-danger @if($errors->has('complaint_image_url')) d-block @else invisible d-block @endif">{{$errors->first('complaint_image_url')}}!</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        {{-- <div class="col-12">
                                            <div class="icheck-success">
                                                <input type="checkbox" value="1" class="@if($errors->has('anonymous_flag')) is-invalid @endif" id="anonymous_flag" name="anonymous_flag" />
                                                <label for="anonymous_flag">
                                                    I don't want to show my name in this complaint, keep my name anonymous
                                                </label>
                                            </div>
                                        </div> --}}
                                        <div class="col-12">
                                            <input id="submit-button" type="submit" value="Raise Complaint"
                                                class="btn btn-success d-block mx-auto my-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" id="username" value="{{session('username')}}">
                    <input type="hidden" id="complaint_image_url" name="complaint_image_url" value="">
                    <input type="hidden" class="@if($errors->has('complaint_type_id')) is-invalid @endif" name="complaint_type_id" value="1">    <!-- For Education Complaint -->
                </form>
            </section>
        </div>

        <aside class="control-sidebar control-sidebar-dark" style="display: none">
            <div class="p-3">
                <h5>Title</h5>
                <p>Sidebar content</p>
            </div>
        </aside>

        <footer class="main-footer">
            <strong>Copyright © 2024
                <a href="/">Gramin Sikayat Niwaran Portal</a> |
            </strong>
            All rights reserved.
        </footer>
        <div id="sidebar-overlay"></div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script defer="" src="../AdminLTE/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script defer="" src="../AdminLTE/dist/js/adminlte.min.js"></script>
        <script src="../AdminLTE/plugins/sweetalert2/sweetalert2.min.js"></script>
        <script src="../js/put_or_delete_file_storage.js"></script>
        <script src="../js/complaint_page.js"></script>
    </div>
</body>

</html>

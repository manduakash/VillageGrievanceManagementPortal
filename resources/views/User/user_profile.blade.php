<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Profile Page | Gramin Sikayat Niwaran Portal</title>

    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&amp;display=fallback" />

    <link rel="stylesheet" href="../AdminLTE/plugins/fontawesome-free/css/all.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="../AdminLTE/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />

    <link rel="stylesheet" href="../AdminLTE/dist/css/adminlte.min.latest.css" />

    <link rel="stylesheet" href="../AdminLTE/plugins/sweetalert2/sweetalert2.min.css" />
    <link rel="stylesheet" href="../css/user_dashboard.css" />
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
                    <a href="complaints?state=4&district=0&block=0&gp=0" class="nav-link">Complaints feed</a>
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
                                <input class="form-control form-control-navbar" type="search" placeholder="Search"
                                    aria-label="Search" />
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
                            class="img-circle elevation-2 p-1 bg-light" alt="User Image" />
                    </div>
                    <div class="info">
                        <a href="#" class="d-block">{{ session('name') }}</a>
                    </div>
                </div>

                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">
                        <li class="nav-item">
                            <a href="/" class="nav-link">
                                <i class="nav-icon fas fa-home"></i>
                                <p>Home</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="user-dashboard" class="nav-link">
                                <i class="nav-icon fas fa-window-restore"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="user-profile" class="nav-link active">
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
                                    <a href="education-complaint" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
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
                                <i class="nav-icon fa fa-file-text"></i>
                                <p>Compliants Feed</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="logout" class="nav-link">
                                <i class="nav-icon fas fa-sign-out"></i>
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
                            <h1 class="m-0">Profile</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item active">User Profile</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">

                    {{-- success alert --}}
                    @if (session()->has('success'))
                        <div class="alert alert-default-success w-100 d-block mb-3 alert-dismissible fade show pr-2"
                            role="alert">
                            <strong><i class="fas fa-check-circle"></i> Success!</strong>
                            {{ session()->get('success') }}
                            <button type="button" class="btn btn-transparent float-right py-0" data-dismiss="alert"
                                aria-label="Close"><i class="fas fa-times"></i></button>
                        </div>
                    @endif
                    {{-- failure alert --}}
                    @if (session()->has('error'))
                        <div class="alert alert-default-danger w-100 d-block mb-3 alert-dismissible fade show pr-2"
                            role="alert">
                            <strong><i class="fas fa-exclamation-circle"></i> Failure!</strong>
                            {{ session()->get('error') }}
                            <button type="button" class="btn btn-transparent float-right py-0" data-dismiss="alert"
                                aria-label="Close"><i class="fas fa-times"></i></button>
                        </div>
                    @endif
                    <div class="row h-100">
                        <div class="col-md-12 mx-auto widget-user-container">
                            <div class="card card-widget widget-user shadow mb-1">
                                <div class="widget-user-header bg-primary">
                                    <h3 class="widget-user-username">{{ session('name') }}</h3>
                                </div>
                                <div class="widget-user-image">
                                    <img class="img-circle elevation-2 bg-light" src="{{ asset('storage/UploadedDocs/'.session('profile_pic')) }}"
                                        alt="User Avatar" />
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col-sm-4 border-right">
                                            <div class="description-block">
                                                <h5 class="description-header">{{ session('total_complaints') }}</h5>
                                                <span class="description-text">TOTAL RAISED COMPLAINTS</span>
                                            </div>
                                        </div>

                                        <div class="col-sm-4 border-right">
                                            <div class="description-block">
                                                <h5 class="description-header">{{ session('resolved_complaints') }}
                                                </h5>
                                                <span class="description-text">RESOLVED COMPLAINTS</span>
                                            </div>
                                        </div>

                                        <div class="col-sm-4">
                                            <div class="description-block">
                                                <h5 class="description-header">{{ session('pending_complaints') }}</h5>
                                                <span class="description-text">PENDING COMPLAINTS</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row h-100">
                        <div class="col-md-12">
                            <div class="card shadow">
                                <div class="card-header border-0 pt-5 pb-5">
                                    <div class="btn btn-sm btn-outline-warning mb-3" data-toggle="modal"
                                        data-target="#edit-modal"><i class="fa fa-pen mr-1"></i> Edit</div>
                                    <div class="row w-100">
                                        <div class="col-md-6"><strong class="text-muted">Contact No:</strong> <input
                                                class="form-control form-control-sm form-control-border border-primary"
                                                readonly value="{{ session('username') }}" /></div>
                                        <div class="col-md-6"><strong class="text-muted">State:</strong> <input
                                                class="form-control form-control-sm form-control-border border-primary"
                                                readonly value="{{ session('state_name') }}" /></div>
                                    </div>
                                    <div class="row w-100 my-3">
                                        <div class="col-md-6"><strong class="text-muted">District:</strong> <input
                                                class="form-control form-control-sm form-control-border border-primary"
                                                readonly value="{{ session('district_name') }}" /></div>
                                        <div class="col-md-6"><strong class="text-muted">Block:</strong> <input
                                                class="form-control form-control-sm form-control-border border-primary"
                                                readonly value="{{ session('block_name') }}" /></div>
                                    </div>
                                    <div class="row w-100 my-3">
                                        <div class="col-md-6"><strong class="text-muted">Gram Panchayat:</strong>
                                            <input
                                                class="form-control form-control-sm form-control-border border-primary"
                                                readonly value="{{ session('gp_name') }}" />
                                        </div>
                                        <div class="col-md-6"><strong class="text-muted">Village:</strong> <input
                                                class="form-control form-control-sm form-control-border border-primary"
                                                readonly value="{{ session('village') }}" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <aside class="control-sidebar control-sidebar-dark" style="display: none">
            <div class="p-3">
                <h5>Title</h5>
                <p>Sidebar content</p>
            </div>
        </aside>

        <footer class="main-footer">

            <strong>Copyright © 2024
                <a href="/">Gramin Sikayat Niwaran Portal</a> | </strong>
            All rights reserved.
        </footer>
        <div id="sidebar-overlay"></div>
        {{-- edit modal --}}
        <div class="modal fade bd-example-modal-sm" id="edit-modal" tabindex="-1" role="dialog"
            aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-primary">
                        <h5 class="modal-title">Edit Profile</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form class="p-4" id="form" method="POST" action="{{ route('edit.profile.post') }}">
                        @csrf
                        <div class="row">
                            <input type="hidden" id="username" name="username" hidden
                                value="{{ session('username') }}" />
                            <div class="col-md-6">
                                <!-- name -->
                                <div class="form-group mb-0">
                                    <label for="name">Your Name </label>
                                    <input type="text" id="name" name="name"
                                        title="if you want to edit this change it from your profile"
                                        value="{{ session('name') }}"
                                        class="form-control form-control-border @if ($errors->has('name')) is-invalid @endif"
                                        placeholder="Enter your name here (optional)" />
                                </div>
                                <span
                                    class="text-danger @if ($errors->has('name')) d-block @else invisible d-block @endif">{{ $errors->first('name') }}!</span>

                                <!-- state_id -->
                                <div class="form-group mb-0">
                                    <label for="state_dropdown">State</label>
                                    <select id="state_dropdown" name="state_id"
                                        data-state-id="{{ session('state_id') }}"
                                        title="if you want to edit this change it from your profile"
                                        class="form-control form-control-border @if ($errors->has('state_id')) is-invalid @endif">
                                        <option hidden="">Select one</option>
                                    </select>
                                </div>
                                <span
                                    class="text-danger @if ($errors->has('state_id')) d-block @else invisible d-block @endif">{{ $errors->first('state_id') }}!</span>

                                <!-- district_id -->
                                <div class="form-group mb-0">
                                    <label for="district_dropdown">District</label>
                                    <select id="district_dropdown" name="district_id"
                                        data-district-id="{{ session('district_id') }}"
                                        title="if you want to edit this change it from your profile"
                                        class="form-control form-control-border @if ($errors->has('district_id')) is-invalid @endif">
                                        <option selected="" hidden="">Select one</option>
                                    </select>
                                </div>
                                <span
                                    class="text-danger @if ($errors->has('district_id')) d-block @else invisible d-block @endif">{{ $errors->first('district_id') }}!</span>

                            </div>
                            <div class="col-md-6">
                                <!-- village -->
                                <div class="form-group mb-0">
                                    <label for="village">Village Name</label>
                                    <input type="text" id="village" name="village"
                                        value="{{ session('village') }}"
                                        title="if you want to edit this change it from your profile"
                                        class="form-control form-control-border @if ($errors->has('village')) is-invalid @endif"
                                        placeholder="Enter your village name here" />
                                </div>
                                <span
                                    class="text-danger @if ($errors->has('village')) d-block @else invisible d-block @endif">{{ $errors->first('village') }}!</span>

                                <!-- block_id -->
                                <div class="form-group mb-0">
                                    <label for="block_dropdown">Block</label>
                                    <select id="block_dropdown" name="block_id"
                                        data-block-id="{{ session('block_id') }}"
                                        title="if you want to edit this change it from your profile"
                                        class="form-control form-control-border @if ($errors->has('block_id')) is-invalid @endif">
                                        <option selected="" hidden="">Select District First</option>
                                    </select>
                                </div>
                                <span
                                    class="text-danger @if ($errors->has('block_id')) d-block @else invisible d-block @endif">{{ $errors->first('block_id') }}!</span>

                                <!-- gp_id -->
                                <div class="form-group mb-0">
                                    <label for="gp_dropdown">Gram Panchayat</label>
                                    <select id="gp_dropdown" name="gp_id" data-gp-id="{{ session('gp_id') }}"
                                        title="if you want to edit this change it from your profile"
                                        class="form-control form-control-border @if ($errors->has('gp_id')) is-invalid @endif">
                                        <option selected="" hidden="">Select Block First</option>
                                    </select>
                                </div>
                                <span
                                    class="text-danger @if ($errors->has('gp_id')) d-block @else invisible d-block @endif">{{ $errors->first('gp_id') }}!</span>
                            </div>

                            <!-- profile_pic -->
                            <div class="col-md-12 mb-0">
                                <label for="pic">Profile Image</label>
                                <div class="input-group input-group-sm">
                                    <input type="hidden" hidden name="profile_pic" id="profile_pic">
                                    <input type="file"
                                        class="form-control pic @if ($errors->has('profile_pic')) is-invalid @endif"
                                        id="pic" value="" data-file-size="200" data-file-type="image">
                                    <span class="input-group-append">
                                        <button type="button" class="btn btn-primary btn-flat upload-btn p-0"><i
                                                class="fa fa-upload mx-3 p-2 bg-primary rounded-circle"></i></button>
                                        <button type="button"
                                            class="btn btn-danger btn-flat delete-btn d-none p-0"><i
                                                class="fa fa-trash mx-3 p-2 bg-danger rounded-circle"></i></button>
                                    </span>
                                </div>
                                <span
                                    class="text-danger @if ($errors->has('profile_pic')) d-block @else invisible d-block @endif">{{ $errors->first('profile_pic') }}!</span>
                            </div>
                        </div>

                        <div class="mt-3 w-100 d-flex justify-content-center">
                            <button type="submit" class="btn btn-outline-primary mx-1">Edit</button>
                            <button type="button" class="btn btn-secondary mx-1" data-dismiss="modal">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <script src="../AdminLTE/plugins/jquery/jquery.min.js"></script>
        <script src="../AdminLTE/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script defer src="../AdminLTE/dist/js/adminlte.min.js"></script>
        <script src="../AdminLTE/plugins/sweetalert2/sweetalert2.min.js"></script>
        <script src="../js/put_or_delete_file_storage.js"></script>
        <script src="../js/user_profile.js"></script>
    </div>
</body>

</html>

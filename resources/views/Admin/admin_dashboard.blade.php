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
  
  <!-- datatable -->
  <link rel="stylesheet" href="../AdminLTE/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css" />
  <link rel="stylesheet" href="../AdminLTE/plugins/datatables-responsive/css/responsive.bootstrap4.min.css" />
  <link rel="stylesheet" href="../AdminLTE/plugins/datatables-buttons/css/buttons.bootstrap4.min.css" />
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
                <h1 class="m-0">Raised Complaints</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item active">Complaint List</li>
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

            <!--- Table: start --->
            <table id="table" class="table table-striped table-bordered table-hover dataTable dt-responsive" aria-describedby="table_info">
              <thead class="bg-primary">
                <tr>
                  <th class="sorting" tabindex="0">Complaint Type</th>
                  <th class="sorting" tabindex="0">Complainant Name</th>
                  <th class="sorting" tabindex="0">Contact No.</th>
                  <th class="sorting" tabindex="0">Obtained Support</th>
                  <th class="sorting" tabindex="0">Gram Panchayat</th>
                  <th class="sorting" tabindex="0">Complaint Date</th>
                  <th class="sorting" tabindex="0">Complaint Status</th>
                  <th class="sorting" tabindex="0">Details</th>
                </tr>
              </thead>
              <tbody>
                <!-- Data rows will be populated here -->
              </tbody>
            </table>
            <!-- Table: end -->
          </div>
        </div>
      </div>
    </div>

    <!-- jQuery UI 1.11.4 -->
    <script src="../AdminLTE/plugins/jquery/jquery.min.js"></script>
    <script src="../AdminLTE/plugins/datatables/jquery.dataTables.min.js"></script>
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
 
  <script src="../AdminLTE/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
  <script src="../AdminLTE/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
  <script src="../AdminLTE/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
  <script src="../AdminLTE/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
  <script src="../AdminLTE/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
  <script src="../AdminLTE/plugins/jszip/jszip.min.js"></script>
  <script src="../AdminLTE/plugins/pdfmake/pdfmake.min.js"></script>
  <script src="../AdminLTE/plugins/pdfmake/vfs_fonts.js"></script>
  <script src="../AdminLTE/plugins/datatables-buttons/js/buttons.html5.min.js"></script>
  <script src="../AdminLTE/plugins/datatables-buttons/js/buttons.print.min.js"></script>
  <script src="../AdminLTE/plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
  <script src="../js/admin/admin_dashboard.js"></script>
  </body>
</html>

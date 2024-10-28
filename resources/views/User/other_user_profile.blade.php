<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Profile Page | Gramin Sikayat Niwaran Portal</title>

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

    <!-- javascript -->
    <script
      defer
      referrerpolicy="origin"
      src="/cdn-cgi/zaraz/s.js?z=JTdCJTIyZXhlY3V0ZWQlMjIlM0ElNUIlNUQlMkMlMjJ0JTIyJTNBJTIyQWRtaW5MVEUlMjAzJTIwJTdDJTIwUmVnaXN0cmF0aW9uJTIwUGFnZSUyMCh2MiklMjIlMkMlMjJ4JTIyJTNBMC4yODYxODgzMjY3NDMwMDU2NSUyQyUyMnclMjIlM0ExMjgwJTJDJTIyaCUyMiUzQTcyMCUyQyUyMmolMjIlM0E1ODUlMkMlMjJlJTIyJTNBMTI4MCUyQyUyMmwlMjIlM0ElMjJodHRwcyUzQSUyRiUyRmFkbWlubHRlLmlvJTJGdGhlbWVzJTJGdjMlMkZwYWdlcyUyRmV4YW1wbGVzJTJGcmVnaXN0ZXItdjIuaHRtbCUyMiUyQyUyMnIlMjIlM0ElMjJodHRwcyUzQSUyRiUyRmFkbWlubHRlLmlvJTJGdGhlbWVzJTJGdjMlMkZwYWdlcyUyRmV4YW1wbGVzJTJGbGFuZ3VhZ2UtbWVudS5odG1sJTIyJTJDJTIyayUyMiUzQTI0JTJDJTIybiUyMiUzQSUyMlVURi04JTIyJTJDJTIybyUyMiUzQS0zMzAlMkMlMjJxJTIyJTNBJTVCJTVEJTdE"
    ></script>
  </head>
  <body class="sidebar-mini" style="height: auto">
    <div class="wrapper">
      <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"
              ><i class="fas fa-bars"></i
            ></a>
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
            <a
              class="nav-link"
              data-widget="navbar-search"
              href="#"
              role="button"
            >
              <i class="fas fa-search"></i>
            </a>
            <div class="navbar-search-block">
              <form class="form-inline">
                <div class="input-group input-group-sm">
                  <input
                    class="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-navbar" type="submit">
                      <i class="fas fa-search"></i>
                    </button>
                    <button
                      class="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
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
                  <img
                    src="dist/img/user1-128x128.jpg"
                    alt="User Avatar"
                    class="img-size-50 mr-3 img-circle"
                  />
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      Brad Diesel
                      <span class="float-right text-sm text-danger"
                        ><i class="fas fa-star"></i
                      ></span>
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
                  <img
                    src="dist/img/user8-128x128.jpg"
                    alt="User Avatar"
                    class="img-size-50 img-circle mr-3"
                  />
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      John Pierce
                      <span class="float-right text-sm text-muted"
                        ><i class="fas fa-star"></i
                      ></span>
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
                  <img
                    src="dist/img/user3-128x128.jpg"
                    alt="User Avatar"
                    class="img-size-50 img-circle mr-3"
                  />
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      Nora Silvester
                      <span class="float-right text-sm text-warning"
                        ><i class="fas fa-star"></i
                      ></span>
                    </h3>
                    <p class="text-sm">The subject goes here</p>
                    <p class="text-sm text-muted">
                      <i class="far fa-clock mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item dropdown-footer"
                >See All Messages</a
              >
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
              <a href="#" class="dropdown-item dropdown-footer"
                >See All Notifications</a
              >
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-widget="fullscreen" href="#" role="button">
              <i class="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              href="#"
              role="button"
            >
              <i class="fas fa-th-large"></i>
            </a>
          </li>
        </ul>
      </nav>

      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <div class="sidebar">
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image p-1">
              <img
                src="{{ asset('storage/UploadedDocs/'.session('profile_pic')) }}"
                class="img-circle elevation-2 p-1 bg-light"
                alt="User Image"
              />
            </div>
            <div class="info">
              <a href="#" class="d-block">Anonymous User</a>
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
            @if(isset($user) && $user !== null)
              <div class="row h-100">
                <div class="col-md-12 mx-auto widget-user-container">
                  <div class="card card-widget widget-user shadow mb-1">
                    <div class="widget-user-header bg-primary">
                      <h3 class="widget-user-username">{{$user->name}}</h3>
                    </div>
                    <div class="widget-user-image">
                      <img
                        class="img-circle elevation-2 bg-light"
                        src="{{$user->profile_pic}}"
                        alt="User Avatar"
                      />
                    </div>
                    <div class="card-footer">
                      <div class="row">
                        <div class="col-sm-4 border-right">
                          <div class="description-block">
                            <h5 class="description-header">{{$user->total_complaints}}</h5>
                            <span class="description-text">TOTAL RAISED COMPLAINTS</span>
                          </div>
                        </div>
                
                        <div class="col-sm-4 border-right">
                          <div class="description-block">
                            <h5 class="description-header">{{$user->resolved_complaints}}</h5>
                            <span class="description-text">RESOLVED COMPLAINTS</span>
                          </div>
                        </div>
                
                        <div class="col-sm-4">
                          <div class="description-block">
                            <h5 class="description-header">{{$user->pending_complaints}}</h5>
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
                      <div class="row w-100">
                        <div class="col-md-6"><strong class="text-muted">Contact No:</strong> <input class="form-control form-control-sm form-control-border border-primary" readonly value="{{$user->username}}"/></div>
                        <div class="col-md-6"><strong class="text-muted">State:</strong> <input class="form-control form-control-sm form-control-border border-primary" readonly value="{{$user->state->state_name}}"/></div>
                      </div>
                      <div class="row w-100 my-3">
                        <div class="col-md-6"><strong class="text-muted">District:</strong> <input class="form-control form-control-sm form-control-border border-primary" readonly value="{{$user->district->district_name}}"/></div>
                        <div class="col-md-6"><strong class="text-muted">Block:</strong> <input class="form-control form-control-sm form-control-border border-primary" readonly value="{{$user->block->block_name}}"/></div>
                      </div>
                      <div class="row w-100 my-3">
                        <div class="col-md-6"><strong class="text-muted">Gram Panchayat:</strong> <input class="form-control form-control-sm form-control-border border-primary" readonly value="{{$user->gram_panchayat->gp_name}}"/></div>
                        <div class="col-md-6"><strong class="text-muted">Village:</strong> <input class="form-control form-control-sm form-control-border border-primary" readonly value="{{$user->village}}"/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            @else
            <div class="row h-100">
              <div class="col-md-12">
                <div class="card shadow py-3">
                 <h1 class="text-center py-5"><i class="fa fa-exclamation-circle text-primary"></i> User Not Found! Please try again</h1>
                </div>
              </div>
            </div>
            @endif
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

        <strong
          >Copyright © 2024
          <a href="/">Gramin Sikayat Niwaran Portal</a> | </strong
        >
        All rights reserved.
      </footer>
      <div id="sidebar-overlay"></div>
      <script
        defer
        src="../AdminLTE/plugins/jquery/jquery.min.js"
      ></script>
      <script
        defer
        src="../AdminLTE/plugins/bootstrap/js/bootstrap.bundle.min.js"
      ></script>
      <script defer src="../AdminLTE/dist/js/adminlte.min.js"></script>
      <script src="../AdminLTE/plugins/sweetalert2/sweetalert2.min.js"></script>
      <script defer src="../api/like/support.js"></script>
      <script defer src="../api/like/disagree.js"></script>
      <script defer src="../api/comment/addComment.js"></script>
      <script defer src="../js/user_dashboard.js"></script>
    </div>
  </body>
</html>

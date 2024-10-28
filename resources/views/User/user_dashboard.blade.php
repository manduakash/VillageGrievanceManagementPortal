<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Dashboard Page | Gramin Sikayat Niwaran Portal</title>

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
                <a href="#" class="nav-link active">
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
                <h1 class="m-0">Select Category</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item active">Dashboard</li>
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
            <div class="row">
              <div class="card card-success">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12 col-lg-6 col-xl-4 d-flex">
                      <div class="card mb-2 bg-gradient-dark">
                        <img
                          class="card-img-top"
                          src="../img/services-education.avif"
                          alt="Dist Photo 1"
                        />
                        <div
                          class="card-img-overlay d-flex flex-column justify-content-end"
                        >
                          <h4 class="text-bold text-primary">
                            Education
                          </h4>
                          <p class="card-text text-white pb-2 pt-1">
                            Raise your concerns about village education system.
                          </p>
                          <a class="btn btn-outline-light border-2" href="education-complaint"><span class="text-bold">Raise Complaint</span></a>
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-md-12 col-lg-6 col-xl-4 d-flex"
                    >
                      <div class="card bg-gradient-dark mb-2">
                        <img
                          class="card-img-top h-100"
                          src="../img/services-health.jpg"
                          alt="Dist Photo 2"
                        />
                        <div
                          class="card-img-overlay d-flex flex-column justify-content-end"
                        >
                          <h4 class="text-bold text-primary mt-5 pt-2">
                            Health
                          </h4>
                          <p class="card-text pb-2 pt-1 text-white">
                            Raise your concerns about health-related issues.
                          </p>
                          <a class="btn btn-outline-light border-2" href="health-complaint"><span class="text-bold">Raise Complaint</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 col-lg-6 col-xl-4 d-flex">
                      <div class="card bg-gradient-dark mb-2">
                        <img
                          class="card-img-top"
                          src="../img/services-development.png"
                          alt="Dist Photo 3"
                        />
                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                          <h4 class="text-bold text-primary">
                            Development
                          </h4>
                          <p class="card-text pb-1 pt-1 text-white">
                            Raise your concerns about village development.
                          </p>
                          <a class="btn btn-outline-light border-2" href="development-complaint"><span class="text-bold">Raise Complaint</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-12">
                <h1 class="m-0">Your Complaints</h1>
              </div>
            </div>
            <div class="row">
              @if(isset($complaints) && $complaints->isNotEmpty())
              @foreach($complaints as $complaint)
                <div class="col-md-12 px-0">

                  <div class="card card-widget">
                    <div class="card-header">
                      <div class="user-block">
                        <img class="img-circle" src="{{ asset('storage/UploadedDocs/'.session('profile_pic')) }}" alt="User Image">
                        <span class="username"><a href="profile-details?id={{ $complaint->user->id}}">{{ $complaint->anonymous_flag ? 'Anonymous User' : $complaint->user->name }}</a></span>
                        <span class="description">Shared publicly - {{ $complaint->created_at->format('g:i A, M jS, Y') }}</span>
                      </div>
                  
                      <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                          <i class="fas fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-tool" data-card-widget="remove">
                          <i class="fas fa-times"></i>
                        </button>
                      </div>
                    </div>
                  
                    <div class="card-body" style="display: block;">
                      @if($complaint->complaint_status_id == 0)
                        <div class="callout callout-success  py-1"><strong class="text-muted">Complaint Status:</strong><br> <i class="fa fa-check-circle text-primary mr-1"></i>Resolved</div>
                      @elseif($complaint->complaint_status_id == 1)
                        <div class="callout callout-warning  py-1"><strong class="text-muted">Complaint Status:</strong><br> <i class="fa fa-clock text-warning mr-1"></i>Pending at Village Authority Level</div>
                      @elseif($complaint->complaint_status_id == 2)
                        <div class="callout callout-warning  py-1"><strong class="text-muted">Complaint Status:</strong><br> <i class="fa fa-clock text-warning mr-1"></i>Pending at Block Authority Level</div>
                      @elseif($complaint->complaint_status_id == 3)
                        <div class="callout callout-warning  py-1"><strong class="text-muted">Complaint Status:</strong><br> <i class="fa fa-clock text-warning mr-1"></i>Pending at District Authority Level</div>
                      @elseif($complaint->complaint_status_id == 4)
                        <div class="callout callout-warning  py-1"><strong class="text-muted">Complaint Status:</strong><br> <i class="fa fa-clock text-warning mr-1"></i>Pending at State Authority Level</div>
                      @endif
                      <p><strong class="">Complaint Type </strong> - 
                        @php
                        $complaintType = $complaint->complaint_type_id;
                        $complaintTypeLabel = 'N/A';
                    
                        if ($complaintType == 1) {
                            $complaintTypeLabel = 'Education Related Complaint';
                        } elseif ($complaintType == 2) {
                            $complaintTypeLabel = 'Health Related Complaint';
                        } elseif ($complaintType == 3) {
                            $complaintTypeLabel = 'Development Related Complaint';
                        }
                        @endphp
                    
                    {{ $complaintTypeLabel }}
                    
                      </p>
                      <p class="address text-muted">
                        <i class="fas fa-location-dot text-primary"></i> <strong class="text-muted">Village</strong> - {{ $complaint->village }}, <strong class="text-muted">Gram Panchayat</strong> - {{ $complaint->gram_panchayat->gp_name }}, <strong class="text-muted">Block</strong> - {{ $complaint->block->block_name }},<br>
                        <strong class="text-muted">District</strong> - {{ $complaint->district->district_name }}, <strong class="text-muted">State</strong> - {{ $complaint->state->state_name }} 
                      </p>
                      <p>{{ $complaint->complaint_desc }}</p>
                      <div class="w-100 d-flex justify-content-center">
                        <img class="img-fluid pad py-2 mx-auto complaint-img" src="{{ asset('storage/UploadedDocs/'.$complaint->complaint_image_url) }}" alt="Photo">
                      </div>
                      
                      <div class="complaint-actions">
                        <button type="button" class="btn btn-action btn-sm support" data-user-id="{{session('user_id')}}" data-cmplnt-id="{{$complaint->id}}"><i class="{{ ($complaint->liked) ? 'fa-solid text-primary' : 'fa-regular' }} fa-thumbs-up"></i> Support</button>
                        <button type="button" class="btn btn-action btn-sm disagree" data-user-id="{{session('user_id')}}" data-cmplnt-id="{{$complaint->id}}"><i class="{{ ($complaint->liked != null && $complaint->liked == false) ? 'fa-solid text-primary' : 'fa-regular' }} fa-thumbs-down"></i> Disagree</button>
                        <button type="button" class="btn btn-action btn-sm share" data-toggle="modal" data-target=".bd-example-modal-sm"><i class="fas fa-share"></i> Share</button>
                        <span class="float-right text-muted"> <span class="likes-count">{{ $complaint->likes_count }}</span> supports <i class="fa-regular fa-thumbs-up"></i> - <span class="comments-count">{{ $complaint->comments_count }}</span> comments <i class="fa-regular fa-comment-dots"></i></span>
                      </div>
                    </div>
                    
                    {{-- share modal --}}
                    <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-sm" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Share</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="row mx-2 d-flex justify-content-center">
                            <div class="col-3"><a title="share via whatsapp" href="whatsapp://send?text={{ asset('complaints?complaint_no=').$complaint->id }}" class="share-icon" style="color: #68cf82;"><i class="fa-brands fa-whatsapp"></i></a></div>
                            <div class="col-3"><a title="share via facebook" href="https://www.facebook.com/sharer/sharer.php?u={{ asset('complaints?complaint_no=').$complaint->id }}" class="share-icon" style="color: #493aee;"><i class="fa-brands fa-facebook"></i></a></div>
                            <div class="col-3"><a title="share via instagram" href="https://www.instagram.com/?url={{ asset('complaints?complaint_no=').$complaint->id }}" class="share-icon" style="color: #ee3a67;"><i class="fa-brands fa-instagram"></i></a></div>
                            <div class="col-3"><a title="share via snapchat" href="https://www.snapchat.com/add/{{ asset('complaints?complaint_no=').$complaint->id }}" class="share-icon" style="color: #c0cf68;"><i class="fa-brands fa-snapchat"></i></a></div>
                          </div>
                          <div class="row mx-2 d-flex justify-content-center">
                            <div class="col-3"><a title="share via twitter" href="https://twitter.com/intent/tweet?url={{ asset('complaints?complaint_no=').$complaint->id }}" class="share-icon" style="color: #68becf;"><i class="fa-brands fa-twitter"></i></a></div>
                            <div class="col-3"><a title="share via telegram" href="https://t.me/share/url?url={{ asset('complaints?complaint_no=').$complaint->id }}" class="share-icon" style="color: #2388e0;"><i class="fa-brands fa-telegram"></i></a></div>
                            <div class="col-3"><a title="share via pinterest" href="https://pinterest.com/pin/create/button/?url={{ asset('complaints?complaint_no=').$complaint->id }}" class="share-icon" style="color: #e5d8228d;"><i class="fa-brands fa-pinterest"></i></a></div>
                            <div class="col-3"><a href="{{ asset('complaints?complaint_no=').$complaint->id }}" data-toggle="tooltip" title="Copy to Clipboard" class="share-icon copy-link" style="color: #cbcbcb;"><i class="fa-regular fa-copy"></i></a></div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div class="card-footer card-comments" style="display: block;">
                      @if(isset($complaint->comments) && $complaint->comments->isNotEmpty())
                        @foreach($complaint->comments as $comment)
                          <div class="card-comment">
                            <img class="img-circle img-sm" src="{{ asset('storage/UploadedDocs/'.$comment->user->profile_pic) }}" alt="User Image">
                            <div class="comment-text">
                              <span class="username">
                                {{ $comment->user->name }}
                              <span class="text-muted float-right">{{ $comment->created_at->format('g:i A, F j') }}</span>
                              </span>
                              {{ $comment->comment }}
                            </div>
                          </div>
                        @endforeach
                      @else
                        <div class="card-comment">
                          <div class="comment-text text-center">
                            No comment posted yet.
                          </div>
                        </div>
                      @endif
                    
                    </div>
                    
                    <div class="card-footer" style="display: block;">
                      <form action="#" method="post">
                        <img class="img-fluid img-circle img-sm" src="{{ asset('storage/UploadedDocs/'.session('profile_pic')) }}" alt="Alt Text">
                        
                        <div class="img-push comment-container d-flex">
                          <input type="text" class="form-control form-control-sm comment-box" placeholder="Post a comment for this complaint...">
                          <button type="button" class="btn-primary add-comment" data-user-id="{{session('user_id')}}" data-cmplnt-id="{{$complaint->id}}"><i class="fa-solid fa-paper-plane fa-rotate-by" style="--fa-rotate-angle: 45deg;"></i></button>
                        </div>
                      </form>
                    </div>
                    
                  </div>
                  
                </div>
              @endforeach
              @else
                <p>No complaints found for the user.</p>
              @endif
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

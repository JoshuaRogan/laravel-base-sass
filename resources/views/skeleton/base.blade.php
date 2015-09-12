<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
	<meta name="author" content="Josh Rogan">
	<meta name="description" content="@yield('description')" >
	
	<title> Cohen  | @yield('title')</title>


	<link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />

	<!-- iOS Options -->


	<!-- STYLESHEETS  -->
	@section('styles')
		<link rel="stylesheet" type="text/css" href="/style/style.min.css">
    @show

	
    @include('analytics.google-analytics')
</head>

<body> 

	<!--HEADER --> 
	@yield('header')
	<!--HEADER --> 




	<!--CONTENT-->
	<div id="main" class="@yield('pageclass') container-fluid"> 
		<!--Flash Messages -->
		@if(Session::has('flash_success'))
			<div class='container flash-messages'>
				<div class="alert alert-success">
					{!!Session::pull('flash_success')!!}
				</div>
			</div>
		@endif

		@if(Session::has('flash_error'))
			<div class='container flash-messages'>
				<div class="alert alert-danger">
					{!!Session::pull('flash_error')!!}
				</div>
			</div>
		@endif
		<!--Flash Messages -->
	
		@yield('content')
	</div>
	<!--CONTENT-->

	<!--FOOTER--> 
	@yield('footer')
	<!--FOOTER-->

	<!--LAZY SCRIPTS --> 
	@section('lazyscripts')
		@if(env('APP_DEBUG')) 
			
		@else
			
		@endif
		<script src="{{asset('/js/app.min.js')}}"></script>
		
    @show
	<!--LAZY SCRIPTS --> 

	
    	
    	
	

</body>



</html>
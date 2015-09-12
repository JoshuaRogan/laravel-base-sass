@extends('skeleton.base')
@extends('skeleton.header')
@extends('skeleton.footer')

@section('title', 'Welcome')
@section('pageclass', 'page-welcome')

@section('styles')
    @parent
@stop

@section('lazyscripts')
    @parent
@stop

@section('content')
<div class="container">
    <div class="row">
        <h1> Hello World! </h1>
        <h2> Welcome to Josh Rogan base Laravel Config </h2>
    </div>
</div>
@stop

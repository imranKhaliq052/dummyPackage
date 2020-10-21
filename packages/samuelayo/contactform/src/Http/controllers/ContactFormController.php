<?php

namespace samuelayo\contactform\Http\controllers;

use samuelayo\contactform\Models\ContactForm;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;



class ContactFormController extends Controller {

    public function index()
    {
       return view('contactform::contact');
    }

    public function sendMail(Request $request)
    {
        ContactForm::create($request->all());
        return redirect(route('contact2'))->with(['message' => 'Thank you, your mail has been sent succesfully.']);
    }


}
//
//  ViewController.swift
//  Radarin
//
//  Created by Luis Martínez Moreno on 12/4/21.
//

import UIKit
import WebKit
import SafariServices

class ViewController: UIViewController {

    @IBOutlet weak var wv: WKWebView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        loadUrl()
    }
    func loadUrl(){
            let url = "http://localhost:3000"
            let urlRequest = URLRequest(url: URL(string: url)!)
            wv.load(urlRequest)
        }
    

}


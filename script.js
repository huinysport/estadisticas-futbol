import Foundation
#if canImport(FoundationNetworking)
import FoundationNetworking
#endif

var semaphore = DispatchSemaphore(value: 0)

var request = URLRequest(url: URL(string: "https://v3.football.api-sports.io/leagues")!, timeoutInterval: Double.infinity)
request.addValue("fdb6b60c8cad45df1afb6c25a6fbbdaf", forHTTPHeaderField: "x-rapidapi-key")
request.addValue("v3.football.api-sports.io", forHTTPHeaderField: "x-rapidapi-host")
request.httpMethod = "GET"

let task = URLSession.shared.dataTask(with: request) { data, response, error in
    guard let data = data else {
        print(String(describing: error))
        semaphore.signal()
        return
    }
    
    if let httpResponse = response as? HTTPURLResponse {
        print("Código de estado: \(httpResponse.statusCode)")
        
        if httpResponse.statusCode == 200 {
            print(String(data: data, encoding: .utf8)!)
        } else {
            print("Error: \(httpResponse.statusCode)")
        }
    }
    
    semaphore.signal()
}

task.resume()
semaphore.wait()
```

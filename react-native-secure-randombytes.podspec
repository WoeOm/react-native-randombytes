require 'json'
package_json = JSON.parse(File.read('package.json'))

Pod::Spec.new do |s|

  s.name           = "react-native-secure-randombytes"
  s.version        = package_json["version"]
  s.summary        = package_json["description"]
  s.license        = package_json["license"]
  s.homepage       = "https://github.com/WoeOm/react-native-secure-randombytes"
  s.author         = { package_json["author"] => package_json["author"] }
  s.platform       = :ios, "7.0"
  s.source         = { :git => "#{package_json["repository"]["url"]}" }
  s.source_files   = '*.{h,m}'
  s.dependency 'React'

end
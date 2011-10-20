$namespace = read-host -prompt "Please enter your namespace"

New-Item -path ../ -name library -itemType directory

Get-ChildItem files *.js |
    Foreach-Object {
        Copy-Item $_.FullName ../library
    }
	
Get-ChildItem ../library *.js |
    Foreach-Object {	
		$c = ($_ | Get-Content) 
        $c = $c -replace 'NAMESPACE',$namespace
        [IO.File]::WriteAllText($_.FullName, ($c -join "`r`n"))
	}
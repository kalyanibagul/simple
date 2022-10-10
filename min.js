function NoBlockLevelScope()
		{
    
			if (1 > 0)
			{
				var myVar = 100;

			}

			alert(myVar);
		}

		NoBlockLevelScope();
function myFunction(x)
        {
            var checkboxes=document.getElementsByName("myCheck");
            console.log(checkboxes)
            for(let i=0;i<checkboxes.length;i++)
            {
                if(x===1)
                {
                    checkboxes[i].checked=true;
                }
                else if(x===2)
                {
                    checkboxes[i].checked=false;
                }
                else
                {
                    if(checkboxes[i].checked)
                    {
                        checkboxes[i].checked=false;
                    }
                    else
                    {
                        checkboxes[i].checked=true;
                    }
                }
            }
        }
// JavaScript Document

window.onload = function()
{
	var array = [4, 12, 43, 59, 2, 81, 29, 38, 92, 51, 21];	
	var m = new Mergifier(array);
	m.start();
}

function Mergifier(array)
{
	this.array = this.splitArray(array);
	console.log(this.array);
}

Mergifier.prototype.start = function()
{
	this.mergesort();	
}

Mergifier.prototype.splitArray = function(array)
{
	var size = array.length;
	var newArray = new Array();
	var currentArray;
	for(var i = 0; i<size; i++)
	{
		currentArray = new Array();
		newArray.push(currentArray);	
	}
	
	return newArray;
}

Mergifier.prototype.mergesort = function()
{
	var cycle = 1;
	var counter = 0;
	var start = 0;
	var array = this.array;
	var length = array.length;
	
	var toMerge, next;
	
	for(var i = 0; i <length; i++)
	{
		toMerge = start + 1;
		next = toMerge + 1;
		
		if(array[toMerge])
		{
			array[counter++] = this.merge(array, start, toMerge);
			
			if(next >= (length/cycle) - 1) 
			{
				array[counter] = array[next];
				next = 0;
				counter = 0;
				cycle++;
			}
		}
		else 
		{
			array[counter] = array[start];
			next = 0;
			counter = 0;
			cycle++;
		}
		
		
		
		start = next;
	}
		
}

Mergifier.prototype.merge = function(array, start, toMerge)
{
	
	var left = array[start];
	var right = array[toMerge];
	
	array[start] = null;
	array[toMerge] = null;
	
	var l, r;
	var result = new Array();
	
	while(left.length >0 && right.length >0)
	{
		l = left[0];
		r = right[0];
		
		if(l >= r)
			result.push(left.shift());
		else result.push(right.shift());
	}
	
	if(left.length > 0)
		result = result.concat(left);
	else if(right.length > 0)
		result = result.concat(right);
		
	return result;
}

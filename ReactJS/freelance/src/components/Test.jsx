import React, { useState, useEffect, useRef } from 'react';



function Test() {
    const observerTarget = useRef(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        console.log('intersecting');
      }
    },
    { threshold: 1 }
  );

  if (observerTarget.current) {
    observer.observe(observerTarget.current);
  }

  return () => {
    if (observerTarget.current) {
      observer.unobserve(observerTarget.current);
    }
  };
}, [observerTarget]);

return(
    <select style={{height:'20px'}}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
        <option>23</option>
        <option>24</option>
        <option>25</option>
        <option>26</option>
        <option>27</option>
        <option>28</option>
        <option>29</option>
        <option>30</option>
        <option>31</option>
        <option>32</option>
        <option>33</option>
        <option>34</option>
        <option>35</option>
        <option>36</option>
        <option>37</option>
        <option>38</option>
        <option>39</option>
        <option>40</option>
        <option>41</option>
        <option>42</option>
        <option>43</option>
        <option>44</option>
        <option>45</option>
        <option>46</option>
        <option>47</option>
        <option>48</option>
        <option>49</option>
        <option>50</option>
        <option>51</option>
        <option>52</option>
        <option>53</option>
        <option ref={observerTarget}>54</option>
        </select>
    // <div>
    // <div>
    //      <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>
    //     <div>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div><div ref={observerTarget}>
    //     <select style={{height:'20px'}}>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     <option>6</option>
    //     </select>
    //     </div>

    // </div>
)
}
export default Test;
<template>

<div class="col-md-6 mb-3">
    <label for="additionalCategory" class="form-label">Additional Category:</label>
    <select id="additionalCategory"  class="form-select" required>
        <option value="" disabled>Select an additional category</option>
        <option value="1">Art</option>
        <option value="2">Comics</option>
        <option value="3">Crafts</option>
        <option value="4">Dance</option>
        <option value="5">Design</option>
        <option value="6">Fashion</option>
        <option value="7">Film &amp; Video</option>
        <option value="8">Food</option>
        <option value="9">Games</option>
        <option value="10">Journalism</option>
        <option value="11">Music</option>
        <option value="12">Photography</option>
        <option value="13">Publishing</option>
        <option value="14">Technology</option>
        <option value="15">Theater</option>
    </select>
    <div class="invalid-feedback">Please select an additional category.</div>
</div>
<div class="col-md-6 mb-3">
    <label for="additionalSubCategory" class="form-label">Additional Sub Category:</label>
    <select id="additionalSubCategory"  class="form-select" required>
        <option value="" disabled>Select an additional subcategory</option>
        <option  value="">--No subcategory--</option>
        <option  value="1">Audio</option>
        <option  value="2">Photo</option>
        <option  value="3">Print</option>
        <option  value="4">Video</option>
        <option  value="5">Web</option>

    </select>
    <div class="invalid-feedback">Please select an additional subcategory.</div>
</div>

                        
  
</template>








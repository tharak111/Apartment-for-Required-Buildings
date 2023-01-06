function allRequirementsAvailableInAStreet(blocks, reqs) {
  for (let i in blocks) {
    i = parseInt(i)
    let index = 0
    for (let req of reqs) {
      if (blocks[i][req] === true) {
        index += 1 
      }
    }
    if (index === reqs.length) {
      return i 
      break;
    }
  }
}

function apartmentToReachRequiredBuildings(blocks, reqs) {
  for (let i in blocks) {
    i = parseInt(i)
    let req_list = []
    for (let req of reqs) {
      if (blocks[i][req] === true) {
        req_list.push(req)
      }
    }
    if (i-1 >= 0) {
      for (let req of reqs) {
        if (blocks[i-1][req] === true) {
          req_list.push(req)
        }
      }
    }
    if (i+1 < blocks.length) {
      for (let req of reqs) {
        if (blocks[i+1][req] === true) {
          req_list.push(req)
        }
      }
    }
    let count = 0
    for (let req of reqs) {
      if (req_list.includes(req)) {
        count += 1 
      }
    }
    if (count === reqs.length) {
      return i
      break;
    }
  }
}

function apartmentHunting(blocks, reqs) {
  const index = allRequirementsAvailableInAStreet(blocks, reqs)
  if (index !== undefined) {
    return i
  } else {
    return apartmentToReachRequiredBuildings(blocks, reqs)
  }
}

exports.apartmentHunting = apartmentHunting;

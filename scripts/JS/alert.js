const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `<div><i class="bi bi-exclamation-triangle-fill"></i>  ${message}</div>`,
        `<br /><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch Alert Details</button>`,
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('Excellent, you have triggered the alert test. Click the button below to get more details on the alert.', 'danger')
    })
}
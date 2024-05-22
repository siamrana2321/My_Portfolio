from django.shortcuts import render
from Portfolio.models import Contact, Certificates, Works

# Create your views here.

def index(request):
    certificates = Certificates.objects.all()
    certificate_slides = int(len(certificates))
    works = Works.objects.all()
    work_slides = int(len(works))

    slider = {'certificate_slides': certificate_slides, 'certificate_range': range(1, certificate_slides), 'certificates':certificates,
              'work_slides': work_slides, 'work_range': range(1, work_slides), 'works':works}


    if request.method == 'POST':
        name = request.POST.get('name','')
        email = request.POST.get('email','')
        message = request.POST.get('message','')
        # Saving into the Database
        contact = Contact(name=name, email=email, message=message)
        contact.save()
    return render(request, 'Portfolio/index.html', slider)





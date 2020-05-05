#from .app import Covid19MexicoData


#class Pet(Covid19MexicoData.Model):
    __tablename__ = 'Covid_mexico2020'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    lat = db.Column(db.Float)
    lon = db.Column(db.Float)

   def __repr__(self):
       return '<Covid_mexico2020 %r>' % (self.name)